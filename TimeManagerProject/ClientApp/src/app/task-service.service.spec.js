"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var task_service_service_1 = require("./task-service.service");
describe('TaskServiceService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(task_service_service_1.TaskServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=task-service.service.spec.js.map