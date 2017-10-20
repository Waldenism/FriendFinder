var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = 3000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencode({ extended: true }));
app.use(bodyParser.text());


require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
});