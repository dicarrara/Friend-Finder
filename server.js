var path = require("path");
var express = require("express");

var PORT = process.env.PORT || 5000;

var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./app/data/friends.js')(app);
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, ()=> console.log ("App listening on PORT " + PORT));