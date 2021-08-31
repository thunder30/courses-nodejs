const Course = require('../models/Course');
const {
    multiplyMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multiplyMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
