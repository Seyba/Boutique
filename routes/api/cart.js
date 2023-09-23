const express = require('express')
const router = express.Router();
const cartCtrl = require('../../controllers/api/cart')

router.post('/:id', cartCtrl.addCartItem)
router.get('/:id', cartCtrl.fetchCartItems)
// router.get('/:id', cartCtrl.fetchCartItemById)
// router.put('/:id', cartCtrl.updateCartItem)
router.delete('/:userId/:prodId', cartCtrl.removeCartItem)

module.exports = router;