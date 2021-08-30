const Course = require('../models/Course');
const {
    multiplyMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    // [GET] /course
    index(req, res, next) {
        // use promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multiplyMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
        //res.send('detail - ' + req.params.slug);
    }

    // [GET] /course/create
    create(req, res) {
        res.render('courses/create');
    }

    // [POST] /course/store
    store(req, res) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect(`/courses`))
            .catch((err) => {});
    }
}

module.exports = new CourseController();
