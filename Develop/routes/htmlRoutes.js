// HTML Routes JavaScript
const path = require("path");

// Make the following functions available everywhere in the application
module.exports = function(app) {

    // GET - returns the home page by default
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // GET - returns the notes page
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // GET - returns the home page if no matching route is found
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}