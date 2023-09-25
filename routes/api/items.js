const express = require('express')
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items')

router.post('/', itemsCtrl.addItem)
router.get('/', itemsCtrl.fetchItems)
router.get('/:id', itemsCtrl.fetchItemById)
router.put('/:id', itemsCtrl.updateItem)
router.delete('/:id', itemsCtrl.removeItem)


module.exports = router;