const express = require('express');
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const router = express.Router();

router.get("/", (req, res) => {
    Category.find({}, (err, category) => {
        if (err) {
            res.status(400).json({ msg: err.message });
            return;
        }
        res.status(200).json(category);
    });
});
router.get("/:categoryName", (req, res) => {
    const {categoryName} = req.params;
    Product.find({category:categoryName}, (err, category) => {
        if (err) {
            res.status(400).json({ msg: err.message });
            return;
        }
        res.status(200).json(category);
    });
});

router.post('/add', (req, res) => {
    const newCategory = new Category(req.body);
    newCategory
        .save()
        .then(() => { res.status(201).json(newCategory) })
        .catch(err => { res.status(500).json(err) })
})

module.exports = router;