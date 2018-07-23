"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    chapterGrades: {}
});
