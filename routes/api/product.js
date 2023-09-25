const express = require('express');
const router = express.Router();
const prodCtr = require('../../controllers/api/products')

// GET /api/products
router.get('/', prodCtr.getAllProducts);
// GET /api/products/:id
router.get('/:id', prodCtr.getProdById);

module.exports = router; 