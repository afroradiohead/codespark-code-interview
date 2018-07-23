import * as mongoose from 'mongoose';
import {Document} from "mongoose";

export const ChapterSchema = new mongoose.Schema({
    number: Number,
    date: Date
});


export interface IChapter extends Document {
    number: number,
    date: Date
}