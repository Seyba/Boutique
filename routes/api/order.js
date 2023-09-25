const express = require('express')
const router = express.Router();
const orderCtrl = require('../../controllers/api/order')

// router.post('/:id', orderCtrl.checkOut)
// router.get('/:id', orderCtrl.getOrders)
// router.get('/:id', orderCtrl.fetchCartItemById)
// router.put('/:id', orderCtrl.updateCartItem)
// router.delete('/:id', orderCtrl.removeCartItem)

// GET /api/orders/cart
router.get('/cart', orderCtrl.cart);
// GET /api/orders/history
router.get('/history', orderCtrl.history);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', orderCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', orderCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', orderCtrl.setItemQtyInCart);


module.exports = router;