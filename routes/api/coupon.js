const express = require('express')
const router = express.Router();
const couponCtrl = require('../../controllers/api/coupon')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const isAdmin = require('../../config/isAdmin')

// router.post('/:id', cartCtrl.addCartItem)
// router.get('/:id', cartCtrl.fetchCartItems)
// router.get('/:id', cartCtrl.fetchCartItemById)
// router.put('/:id', cartCtrl.updateCartItem)
// router.delete('/:userId/:prodId', cartCtrl.removeCartItem)
router.post('/', ensureLoggedIn, isAdmin, couponCtrl.createCoupon)
router.delete('/:id', ensureLoggedIn, isAdmin, couponCtrl.deleteCoupon)
router.get('/', ensureLoggedIn, isAdmin, couponCtrl.getCoupons)
router.get('/:id', ensureLoggedIn, isAdmin, couponCtrl.getCoupon)
router.put('/:id', ensureLoggedIn, isAdmin, couponCtrl.updateCoupon)


module.exports = router