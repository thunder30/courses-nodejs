const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create); // get form thêm mới
router.post('/store', courseController.store); // thêm mới khoá học [POST]
router.get('/:id/edit', courseController.edit); // get form chỉnh sửa
router.put('/:id', courseController.update); // cập nhật khoá học [PUT]
router.delete('/:id', courseController.delete); // cập nhật khoá học [PUT]
router.get('/:slug', courseController.show); // hiển thị chi tiết khoá học

module.exports = router;
