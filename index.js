let express = require('express');
let layouts = require('express-ejs-layouts');
let fs = require('fs');
let methodOverride = require ('method-override');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'))

app.use('/dogs', require('./controllers/dogs'));
app.use('/cats', require('./controllers/cats'));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(8000, () => {
    console.log("Sittin pretty on port 8000")
})