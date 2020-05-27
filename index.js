const express = require('express');
const app = express();


app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/submit', (req, res) =>{
    res.render('submit.ejs')
});

app.get('/submit44', (req, res) =>{
    res.render('life.ejs')
});

app.listen(1000);