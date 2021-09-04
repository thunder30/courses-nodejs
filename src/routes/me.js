const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;

// router này điều hướng tới những gì liên quan tới cá nhân: khoá học của tôi, bài viết của tôi
