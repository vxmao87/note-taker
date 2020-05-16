const fs = require("fs");
const noteData = require("../db/db.json");
const path = require("path");

// Make the following functions available throughout the application
module.exports = function(app) {

    // GET - returns all notes as JSON
    app.get("/api/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    // POST - adds a new note
    app.post("/api/notes", function(req, res) {
        const note = req.body;
        console.log(note);
        noteData.push(note);
        console.log(noteData);
        fs.writeFile("./db/db.json", JSON.stringify(noteData), function(err) {
            if (err) throw err;
            console.log("db.json file successfully written!");
        })
        res.json(note);
    });

    // DELETE - deletes a selected note using the ID associated with the note
    app.delete("/api/notes/:id", function(req, res) {
        

    });
}