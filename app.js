var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var responseTime = require('response-time');



var routes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(responseTime());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
    next();
});


app.listen(process.env.PORT || '3000', function () {
    console.log('Example app listening on port ' + (process.env.PORT || '3000'));
});

