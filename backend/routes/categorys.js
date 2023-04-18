const express = require('express');

const router = express.Router();

const {
    getAllCategory,
    getCategory,
    addCategory } = require('../controlers/categorysController')

router.get("/", getAllCategory);
router.get("/:categoryName", getCategory);
router.post('/add', addCategory)

module.exports = router;