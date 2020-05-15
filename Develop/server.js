var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});