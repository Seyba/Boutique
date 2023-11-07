const express = require('express')
const router = express.Router();
const categoryCtrl = require('../../controllers/api/category')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const isAdmin = require('../../config/isAdmin')

router.post('/', ensureLoggedIn, isAdmin, categoryCtrl.createCategory)
router.delete('/:id', ensureLoggedIn, isAdmin, categoryCtrl.deleteCategory)
router.get('/', ensureLoggedIn, isAdmin, categoryCtrl.getCategories)
router.get('/:id', ensureLoggedIn, isAdmin, categoryCtrl.getCategory)
router.put('/:id', ensureLoggedIn, isAdmin, categoryCtrl.updateCategory)


module.exports = router