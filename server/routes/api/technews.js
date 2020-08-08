const express = require('express');
const router = express.Router();
const axios = require('axios');
const TechNewsController = require('../../controllers/technews.controller');

router.get('/', TechNewsController.all);

module.exports = router;