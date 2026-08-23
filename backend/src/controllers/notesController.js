import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    // res.send("5 notes from the router ");
    try {
        const notes = await Note.find();
        res.json(notes);
    }
    catch (err) {
        console.log("Error in getAllNotes controller: " + err.message);
        res.status(500).json({ message: "Server Error here." });
    }
};

export async function getNotesById(req, res) {
    try {
        const note = await Note.findById(req.params.id);            
        res.json(note);
    }
    catch (err) {
        console.log("Error in getNotesById controller: " + err.message);
        res.status(500).json({ message: "Server Error here." });
    }       
        
}


export async function createNotes(req, res) {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json({ message: "Notes created successfully" });
    } catch (err) { 
        console.log("Error in createNotes controller: " + err.message);
        res.status(500).json({ message: "Server Error here." });
    }
};
export async function updateNotes(req, res) {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(note);
    } catch (err) {
        console.log("Error in updateNotes controller: " + err.message);
        res.status(500).json({ message: "Server Error here." });
    }
};

export async function deleteNotes(req, res) {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Notes deleted successfully" });
    } catch (err) {
        console.log("Error in deleteNotes controller: " + err.message);
        res.status(500).json({ message: "Server Error here." });
    }
};