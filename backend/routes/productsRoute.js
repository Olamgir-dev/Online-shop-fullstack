const express = require('express');
const {
    getAllProducts,
    getProducts,
    addProduct,
    deleteProduct,
    updateProducit } = require('../controlers/productsController')

const router = express.Router();

router.get('/', getAllProducts)
router.get(`/:_id`, getProducts)
router.post('/add', addProduct)
router.delete("/:_id", deleteProduct);
router.put("/:_id", updateProducit)

module.exports = router;