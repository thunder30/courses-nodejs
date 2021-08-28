const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// GET /news
router.use('/detail', newsController.show);
router.use('/:slug', newsController.slug);
router.use('/', newsController.index);

module.exports = router;
