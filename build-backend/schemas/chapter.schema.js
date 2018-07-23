"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ChapterSchema = new mongoose.Schema({
    number: Number,
    date: Date
});
