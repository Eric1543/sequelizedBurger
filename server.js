// Import Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Initialize express server
var app = express();

// Body Parser Middleware
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type:"application/vnd.api+json"}));

// View Template
var exphbs = require("express-handlebars");
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");	

// Assign port
var PORT = process.env.PORT || 3000;

// Set up db
var db = require("./models");

// Require routes
require("./routes/api-routes.js")(app);

// Sync to db and set app to listen
db.sequelize.sync({force: false}).then(function() {
	app.listen(PORT, function(){
		console.log("App listening on: " + PORT);
	});
});