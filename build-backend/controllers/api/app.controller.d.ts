/// <reference path="../../../node_modules/@types/lodash/common/common.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/array.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/collection.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/date.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/function.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/lang.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/math.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/number.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/object.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/seq.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/string.d.ts" />
/// <reference path="../../../node_modules/@types/lodash/common/util.d.ts" />
import { Model } from "mongoose";
import { IStudent } from "../../schemas/student.schema";
import { IChapter } from "../../schemas/chapter.schema";
export declare class ApiAppController {
    private readonly studentModel;
    private readonly chapterModel;
    constructor(studentModel: Model<IStudent>, chapterModel: Model<IChapter>);
    get(): Promise<{
        chapterInfo: _.Dictionary<{
            date: any;
        }>;
        studentInfoList: any;
    }>;
}
