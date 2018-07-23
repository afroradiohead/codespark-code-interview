import { Get, Controller } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IStudent} from "../../schemas/student.schema";
import {IChapter} from "../../schemas/chapter.schema";
import {chain} from 'lodash';

@Controller('/api/app')
export class ApiAppController {
    constructor(
        @InjectModel('student') private readonly studentModel: Model<IStudent>,
        @InjectModel('chapter') private readonly chapterModel: Model<IChapter>,
    ) {}

    @Get()
    async get() {
        const studentList: any = await this.studentModel.find().lean();
        const chapterList: any = await this.chapterModel.find().lean();

        console.log(studentList);

        return {
            chapterInfo: chain(chapterList)
                .keyBy('number')
                .mapValues((chapter: any) => ({date: chapter.date}))
                .value(),
            studentInfoList: studentList.map((student: any) => ({
                name: student.name,
                chapter: student.chapterGrades,
            }))
        };
    }
}