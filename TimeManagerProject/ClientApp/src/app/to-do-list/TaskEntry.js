"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEntry = void 0;
var TaskEntry = /** @class */ (function () {
    function TaskEntry(values) {
        if (values === void 0) { values = {}; }
        this.description = "";
        this.isDone = false;
        this.toDoList = [];
        Object.assign(this, values);
    }
    TaskEntry.prototype.addTask = function () {
        this.toDoList.push(new TaskEntry());
    };
    TaskEntry.prototype.deleteTask = function (index) {
        if (index > -1) {
            this.toDoList.splice(index, 1);
        }
    };
    return TaskEntry;
}());
exports.TaskEntry = TaskEntry;
//# sourceMappingURL=TaskEntry.js.map