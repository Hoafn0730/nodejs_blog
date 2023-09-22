const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

// app.post('/post', (req, res, next) => {});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
