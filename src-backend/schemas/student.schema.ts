import * as mongoose from 'mongoose';
import {Document} from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    // code: Number,
    name: {
        first: String,
        last: String
    },
    chapterGrades: {

    }
});

export interface IStudent extends Document {
    // code: number;
    name: {
        first: string;
        last: string;
    },
    chapterGrades: any
}