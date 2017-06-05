import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ShirakCollege = new Schema({
    title     : { type: String , required: true},
    createdAt : { type: Date }
});

mongoose.model('ShirakCollege', ShirakCollege);
