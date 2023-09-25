const express = require('express');
const router = express.Router();
const prodCtr = require('../../controllers/api/products')

// GET /api/items
router.get('/', prodCtr.index);
// GET /api/items/:id
router.get('/:id', prodCtr.show);

module.exports = router; 