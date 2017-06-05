import mongoose from "mongoose";

import config from './config.json';

import './models/ShirakCollege';

const Note = mongoose.model('shirak_college');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(id) {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title: data.title,
        createdAt: new Date()
    });

    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

