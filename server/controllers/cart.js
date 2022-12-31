const Cart = require("../models/Cart");
const controller = {
    createCart: async(req, res) => {
        try {
            const newCart = new Cart(req.body);
            await newCart.save();
            res.status(200).json(newCart);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getCart: async(req, res) => {
        try {
            const cart = await Cart.findById({ userId: req.params.userId });

            res.status(200).json(cart);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteCart: async(req, res) => {
        try {
            const cart = await Cart.findByIdAndDelete({ userId: req.params.userId });

            res.status(200).json("delete Cart success");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateCart: async(req, res) => {
        try {
            const updateCart = await Cart.findByIdAndUpdate({ userId: req.params.userId }, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updateCart);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAll: async(req, res) => {
        try {
            const carts = Cart.find();
            res.status(200).json(carts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = controller;