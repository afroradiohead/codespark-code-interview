import * as mongoose from 'mongoose';
import { Document } from "mongoose";
export declare const ChapterSchema: mongoose.Schema;
export interface IChapter extends Document {
    number: number;
    date: Date;
}
