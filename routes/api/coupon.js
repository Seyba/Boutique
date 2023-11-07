const express = require('express')
const router = express.Router();
const couponCtrl = require('../../controllers/api/coupon')

// router.post('/:id', cartCtrl.addCartItem)
// router.get('/:id', cartCtrl.fetchCartItems)
// router.get('/:id', cartCtrl.fetchCartItemById)
// router.put('/:id', cartCtrl.updateCartItem)
// router.delete('/:userId/:prodId', cartCtrl.removeCartItem)
router.post('/', couponCtrl.createCoupon)
router.put('/:id', couponCtrl.updateCoupon)
module.exports = router;