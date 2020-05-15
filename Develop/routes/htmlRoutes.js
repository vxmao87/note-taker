// HTML Routes JavaScript
var path = require("path");

// Make the following functions available everywhere in the application
module.exports = function(app) {

    // Returns the notes page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Returns the home page if no matching route is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}