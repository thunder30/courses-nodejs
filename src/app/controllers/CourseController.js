const CourseModel = require('../models/Course');
const {
    multiplyMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    // [GET] /course
    index(req, res, next) {
        // use promise
        CourseModel.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multiplyMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /course/:slug
    show(req, res, next) {
        CourseModel.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
        //res.send('detail - ' + req.params.slug);
    }
}

module.exports = new CourseController();
