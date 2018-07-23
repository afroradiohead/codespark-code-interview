"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
let ApiAppController = class ApiAppController {
    constructor(studentModel, chapterModel) {
        this.studentModel = studentModel;
        this.chapterModel = chapterModel;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const studentList = yield this.studentModel.find().lean();
            const chapterList = yield this.chapterModel.find().lean();
            console.log(studentList);
            return {
                chapterInfo: lodash_1.chain(chapterList)
                    .keyBy('number')
                    .mapValues((chapter) => ({ date: chapter.date }))
                    .value(),
                studentInfoList: studentList.map((student) => ({
                    name: student.name,
                    chapter: student.chapterGrades,
                }))
            };
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApiAppController.prototype, "get", null);
ApiAppController = __decorate([
    common_1.Controller('/api/app'),
    __param(0, mongoose_1.InjectModel('student')),
    __param(1, mongoose_1.InjectModel('chapter')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ApiAppController);
exports.ApiAppController = ApiAppController;
