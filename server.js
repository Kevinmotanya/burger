//requiring express 
var express = require("express");
//var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
// parsing the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Parses application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));
//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

var routes = require("./controllers/burgers_controller");

app.use(routes);
//starting up the server
app.listen(PORT, function() {
  console.log("Burger Server listening on: http://localhost:" + PORT);
});