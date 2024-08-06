const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.post('/', portfolioController.createPortfolio);

module.exports = router;
