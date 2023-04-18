const Category = require('../models/categoryModel')
const Product = require('../models/productModel')
const getAllCategory = async (req, res) => {
    try {

        const category = await Category.find();
        res.status(200).json(category)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}
const getCategory = async (req, res) => {
    try {
        const { categoryName } = req.params;
        const category = await Product.find({ category: categoryName })
        res.status(200).json(category)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}
const addCategory = async (req, res) => {
    try {
        const newCategory = await new Category(req.body);
        await newCategory.save()
        res.status(200).send(newCategory)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = {
    getAllCategory,
    getCategory,
    addCategory
}