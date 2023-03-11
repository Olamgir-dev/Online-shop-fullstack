const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

router.get('/', (req, res) => {
    Product.find({}, (err, data) => {
        if(err){
            res.status(500).json({error:err})
            return;
        }
        res.status(200).json(data);
    })
})
router.get(`/:id`, (req, res) => {
    Product.findById(req.params.id)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).json({ error: err }));
})
router.post('/add', (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save()
        .then(() => { res.status(201).json(newProduct) })
        .catch(err => { res.status(500).json(err) })
})
router.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json("DELETE 🥳🥳🥳🥳!"))
        .catch((err) => res.status(400).json(`Error : ${err}`));
});
router.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then((response) => res.status(200).json(response))
        .catch((err) => res.status(500).json({ error: err }));
})
module.exports = router;