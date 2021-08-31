const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');

function route(app) {
    // Route News
    app.use('/news', newsRouter);

    // Route Course
    app.use('/courses', courseRouter);

    // Route Me
    app.use('/me', meRouter);

    // Route Home, Search, Contact...
    app.use('/', siteRouter);
}

module.exports = route;
