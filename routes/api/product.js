const express = require('express');
const router = express.Router();
const prodCtr = require('../../controllers/api/products')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const isAdmin = require('../../config/isAdmin')

// GET /api/products
router.get('/', prodCtr.getAllProducts);
// GET /api/products/:id
router.get('/:id', prodCtr.getProdById);
router.post('/', ensureLoggedIn, isAdmin, prodCtr.createProduct)
router.put('/rating', ensureLoggedIn, prodCtr.rating)
router.put('/wishlist', ensureLoggedIn, prodCtr.addProdToWishlist)
router.put('/:id', ensureLoggedIn, isAdmin, prodCtr.updateProduct)
router.delete('/:id', ensureLoggedIn, isAdmin, prodCtr.deleteProduct)

module.exports = router; 