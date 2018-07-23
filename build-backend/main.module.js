"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const main_controller_1 = require("./main.controller");
const mongoose_1 = require("@nestjs/mongoose");
const student_schema_1 = require("./schemas/student.schema");
const app_controller_1 = require("./controllers/api/app.controller");
const chapter_schema_1 = require("./schemas/chapter.schema");
let MainModule = class MainModule {
};
MainModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://cheese:cheese123@ds245901.mlab.com:45901/codespark-interview'),
            mongoose_1.MongooseModule.forFeature([
                { name: 'student', schema: student_schema_1.StudentSchema },
                { name: 'chapter', schema: chapter_schema_1.ChapterSchema },
            ])
        ],
        controllers: [app_controller_1.ApiAppController, main_controller_1.MainController],
        providers: [],
    })
], MainModule);
exports.MainModule = MainModule;
