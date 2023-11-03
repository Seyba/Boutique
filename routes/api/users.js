const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const isAdmin = require('../../config/isAdmin')


router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.post('/admin-login', usersCtrl.adminLogin)
router.get('/', ensureLoggedIn, isAdmin, usersCtrl.getUsers)
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/wishlist', ensureLoggedIn, usersCtrl.getWishList)
router.put('/block-user/:id', ensureLoggedIn, isAdmin, usersCtrl.blockUser)
router.put('/unblock-user/:id', ensureLoggedIn, isAdmin, usersCtrl.unblockUser)
router.put('/save-address', ensureLoggedIn, usersCtrl.saveAddress)
router.put('/:id', usersCtrl.updateUser)
router.delete('/:id', ensureLoggedIn, isAdmin, usersCtrl.unSubscribe)
router.get('/:id', usersCtrl.getSingleUser)

module.exports = router;