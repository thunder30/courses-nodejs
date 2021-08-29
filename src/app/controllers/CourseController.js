const courseModel = require('../models/Course');

class CourseController {
    index(req, res) {
        courseModel.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
                return;
            }
            res.status(400).json({
                error: 'ERROR',
            });
        });
    }
}

module.exports = new CourseController();
