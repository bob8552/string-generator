const express = require('express');
const app = express();
const path = require('path');

app.set('view-engine', 'ejs');

app.use(express.static(path.join(__dirname, "views")));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set({'Content-Type': 'text/html'});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () =>{
    console.log('Listening on port 3000')
});