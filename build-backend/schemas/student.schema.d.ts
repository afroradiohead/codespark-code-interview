import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export declare const StudentSchema: mongoose.Schema;
export interface IStudent extends Document {
    name: {
        first: string;
        last: string;
    };
    chapterGrades: any;
}
