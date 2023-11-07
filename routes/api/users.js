const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const isAdmin = require('../../config/isAdmin')


router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.post('/admin-login', usersCtrl.adminLogin)
router.post('/cart', ensureLoggedIn, usersCtrl.userCart)
router.post('/cart/cash-order', ensureLoggedIn, usersCtrl.createOrder)
router.post('/cart/apply-coupon', ensureLoggedIn, usersCtrl.applyCoupon)
router.get('/cart', ensureLoggedIn, usersCtrl.getUserCart)
router.get('/',  usersCtrl.getUsers)
router.get('/get-orders', ensureLoggedIn, usersCtrl.getOrders)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/wishlist', ensureLoggedIn, usersCtrl.getWishList)
router.put('/block-user/:id', ensureLoggedIn, isAdmin, usersCtrl.blockUser)
router.put('/unblock-user/:id', ensureLoggedIn, isAdmin, usersCtrl.unblockUser)
router.put('/save-address', ensureLoggedIn, usersCtrl.saveAddress)
router.put('/:id', usersCtrl.updateUser)
router.delete('/empty-cart', ensureLoggedIn, usersCtrl.emptyCart)
router.delete('/:id', ensureLoggedIn, isAdmin, usersCtrl.unSubscribe)
router.get('/:id', usersCtrl.getSingleUser)

module.exports = router;