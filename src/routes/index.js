const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');

function route(app) {
    // Route News
    app.use('/news', newsRouter);

    // Route Course
    app.use('/course', courseRouter);

    // Route Home, Search, Contact...
    app.use('/', siteRouter);
}

module.exports = route;
