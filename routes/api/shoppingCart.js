const express = require('express')
const router = express.Router();
const shopnCrtCtrl = require('../../controllers/api/shoppingCart')
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', ensureLoggedIn, shopnCrtCtrl.addItemToCart)
router.get('/', ensureLoggedIn, shopnCrtCtrl.fetchCart)
// router.get('/:id', cartCtrl.fetchCartItemById)
// router.put('/:id', cartCtrl.updateCartItem)
// router.delete('/:userId/:prodId', cartCtrl.removeCartItem)

module.exports = router;