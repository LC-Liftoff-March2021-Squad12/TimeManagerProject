"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(values) {
        if (values === void 0) { values = {}; }
        this.description = "";
        this.completed = false;
        Object.assign(this, values);
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=Task.js.map