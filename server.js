var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = (process.env.PORT || 3000);

var app = express();


app.use(express.static(path.join(__dirname, './app/public')));
// app.use(express.static(path.join('./app', 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);


app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
});

module.exports = app;