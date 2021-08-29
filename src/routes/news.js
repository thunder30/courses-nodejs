const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// GET /news
router.get('/detail', newsController.show);
router.get('/:slug', newsController.slug);
router.get('/', newsController.index);

module.exports = router;
