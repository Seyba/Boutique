const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.put('/:id', usersCtrl.updateUser)
router.delete('/:id', usersCtrl.unSubscribe)
router.get('/', usersCtrl.getUsers)
router.get('/:id', usersCtrl.getSingleUser)

module.exports = router;