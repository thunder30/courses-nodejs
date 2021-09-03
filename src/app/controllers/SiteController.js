const Course = require('../models/Course');
const {
    multiplyMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');
class SiteController {
    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /
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

module.exports = new SiteController();
