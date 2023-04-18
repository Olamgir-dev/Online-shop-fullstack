const { request } = require('express')
const Product = require('../models/productModel')

const getAllProducts = async (req, res) => {
    try {
        const limit =  Number(req.query.limit) || 0;
        const sort =  req.query.sort == 'desc' ? -1 : 1;
        const allProducts = await Product.find()
            .limit(limit)
            .sort({ price: sort })
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}
const getProducts = async (req, res) => {
    const { _id } = req.params
    try {
        const getProduct = await Product.findOne({ _id })
        res.status(200).json(getProduct)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}
const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { _id } = req.params
        const producit = await Product.findByIdAndDelete({ _id })
        res.status(200).json(producit)
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}
const updateProducit = async (req, res) => {
    try {
        const { _id } = req.params
        const { title, category, description, price } = await req.body
        const product = Product.findByIdAndUpdate(
            { _id },
            { title, category, description, price },
            { new: true }
        )
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports = {
    getAllProducts,
    getProducts,
    addProduct,
    deleteProduct,
    updateProducit
}