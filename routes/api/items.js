const express = require('express')
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items')

router.post('/items', itemsCtrl.addItem)
router.get('/items', itemsCtrl.fetchItems)
router.get('/items/:id', itemsCtrl.fetchItemById)
router.put('/items/:id', itemsCtrl.updateItem)
router.delete('/items/:id', itemsCtrl.removeItem)

module.exports = router;