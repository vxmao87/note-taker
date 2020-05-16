const fs = require("fs");
const noteData = require("../db/db.json");
const path = require("path");

// Make the following functions available throughout the application
module.exports = function(app) {

    // GET - returns all notes as JSON
    app.get("/api/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    // POST - adds a new note, and adds an ID onto that note
    app.post("/api/notes", function(req, res) {
        const note = req.body;
        noteData.push(note);

        writeFullFile(noteData);
        res.json(noteData);
    });

    // DELETE - deletes a selected note using the ID associated with the note
    app.delete("/api/notes/:id", function(req, res) {
        const noteID = req.params.id;
        for(var i = 0; i < noteData.length; i++) {
            if(noteID == noteData[i].id) {
                noteData.splice(i, 1);
            }
        }
        writeFullFile(noteData);
        res.json(noteData);
    });     
}

// Adds an ID tag to each note
function addID(notes) {
    for(var i = 0; i < notes.length; i++) {
        notes[i].id = i + 1;
    }
}

// Calls the addID function, then writes the JSON file
function writeFullFile(noteData) {
    addID(noteData);
    fs.writeFile("./db/db.json", JSON.stringify(noteData), function(err) {
        if (err) throw err;
        console.log("db.json file successfully written!");
    });
}