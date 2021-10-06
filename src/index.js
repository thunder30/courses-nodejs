const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3001;

// config static file
app.use(express.static(path.join(__dirname, 'public')));

// handle middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// customer middleware
app.use(SortMiddleware);

// HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
