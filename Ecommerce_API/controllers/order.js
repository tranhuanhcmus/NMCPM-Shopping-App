const Order = require("../models/Order");
const controller = {
    createOrder: async(req, res) => {
        try {
            const newOrder = new Order(req.body);
            await newOrder.save();
            res.status(200).json(newOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getOrder: async(req, res) => {
        try {
            const order = await Order.find({ userId: req.params.userId });

            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteOrder: async(req, res) => {
        try {
            const order = await Order.findByIdAndDelete({
                userId: req.params.userId,
            });

            res.status(200).json("delete order success");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateOrder: async(req, res) => {
        try {
            const updateOrder = await Order.findByIdAndUpdate({ userId: req.params.userId }, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updateOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAll: async(req, res) => {
        try {
            const orders = Order.find();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getStats: async(req, res) => {
        const date = new Date();
        const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
        const previousMonth = new Date(
            new Date().setMonth(lastMonth.getMonth() - 1)
        );

        try {
            const income = await Order.aggregate([
                { $match: { createdAt: { $gte: previousMonth } } },
                {
                    $project: {
                        month: { $month: "$createdAt" },
                        sales: "$amount",
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: "$sales" },
                    },
                },
            ]);
            res.status(200).json(income);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = controller;