// the required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

var app = express();

// Serve up  from the 'public' dir
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// method override
app.use(methodOverride('_method'));

// Set Handlebars and requiring the var for handlebars
var exphbars = require('express-handlebars');

app.engine('handlebars', exphbars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes by requiring them
var routes = require('./controllers/burgers_controller.js');
//using the routes
app.use('/', routes);
app.listen(port);