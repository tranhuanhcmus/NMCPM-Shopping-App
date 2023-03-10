const Product = require("../models/Product");
const controller = {
    createProduct: async(req, res) => {
        try {
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(200).json(newProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getProductbyId: async(req, res) => {
        try {
            const product = await Product.findById(req.params.id);

            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    getAllProducts: async(req, res) => {
        const qNew = req.query.new;
        const qCategory = req.query.category;
        try {
            let products;
            if (qNew) {
                products = await Product.find().sort({ createAt: -1 }).limit(5);
            } else if (qCategory) {
                products = await Product.find({
                    categories: {
                        $in: [qCategory],
                    },
                });
            } else {
                products = await Product.find();
            }
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updateProductbyId: async(req, res) => {
        try {
            const updateProduct = await Product.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                }, { new: true }
            );
            res.status(200).json(updateProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteProductbyId: async(req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("delete Product Successful");
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = controller;