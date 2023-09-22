const express = require('express')
const router = express.Router();
const cartCtrl = require('../../controllers/api/cart')

router.post('/cart', cartCtrl.addCartItem)
router.get('/cart', cartCtrl.fetchCartItems)
router.get('/cart/:id', cartCtrl.fetchCartItemById)
router.put('/cart/:id', cartCtrl.updateCartItem)
router.delete('/cart/:id', cartCtrl.removeCartItem)

module.exports = router;