const express = require('express')
const router = express.Router();
const orderCtrl = require('../../controllers/api/order')

router.post('/:id', orderCtrl.checkOut)
router.get('/:id', orderCtrl.getOrders)
// router.get('/:id', orderCtrl.fetchCartItemById)
// router.put('/:id', orderCtrl.updateCartItem)
// router.delete('/:id', orderCtrl.removeCartItem)

module.exports = router;