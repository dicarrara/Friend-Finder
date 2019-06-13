var path = require ('path');
var express = require("express");
var app = express();

// Routes and export it
module.exports = function (app) {
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// how t ouse that? 
// app.use(function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/home.html'));
// });

}
