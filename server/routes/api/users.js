const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/users.controller');

router.get('/', UserController.all);
router.get('/search/:id', UserController.searchByName);
router.get('/find-by-login/:id', UserController.findByLogin);
router.get('/:id', UserController.one);

module.exports = router;