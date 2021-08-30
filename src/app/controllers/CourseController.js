const CourseModel = require('../models/Course');
const { multiplyMongooseToObject } = require('../../util/mongoose');
class CourseController {
    index(req, res, next) {
        // get all collection
        // CourseModel.find({}, function (err, courses) {
        //     if(!err) {
        //         res.json(courses);
        //         return;
        //     }
        //     res.status(400).json({
        //         error: 'ERROR',
        //     });
        // });

        // use promise
        CourseModel.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multiplyMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
