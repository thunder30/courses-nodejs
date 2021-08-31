const Course = require('../models/Course');
const {
    multiplyMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
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

    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [PUT] /course/:id
    update(req, res, next) {
        const id = req.params.id;
        Course.updateOne({ _id: id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

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
}

module.exports = new CourseController();
