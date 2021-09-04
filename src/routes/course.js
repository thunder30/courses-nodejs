const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create); // get form thêm mới
router.post('/store', courseController.store); // thêm mới khoá học [POST]
router.get('/:id/edit', courseController.edit); // get form chỉnh sửa
router.put('/:id', courseController.update); // cập nhật khoá học [PUT]
router.patch('/:id/restore', courseController.restore); // cập nhật khoá học [PATCH]
router.delete('/:id', courseController.delete); // soft delete khoá học [DELETE]
router.delete('/:id/force', courseController.forceDelete); // Xoá vĩnh viễn khoá học
router.get('/:slug', courseController.show); // hiển thị chi tiết khoá học

module.exports = router;
