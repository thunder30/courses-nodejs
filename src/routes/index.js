
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    // Route News
    app.use('/news', newsRouter);
    
    // Route Home, Search, Contact...
    app.use('/', siteRouter);

}

module.exports = route;
