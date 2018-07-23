import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {StudentSchema} from "./schemas/student.schema";
import {ApiAppController} from "./controllers/api/app.controller";
import {ChapterSchema} from "./schemas/chapter.schema";

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI),
        MongooseModule.forFeature([
            { name: 'student', schema: StudentSchema },
            { name: 'chapter', schema: ChapterSchema },
        ])
    ],
    controllers: [ApiAppController, MainController],
    providers: [],
})
export class MainModule {}