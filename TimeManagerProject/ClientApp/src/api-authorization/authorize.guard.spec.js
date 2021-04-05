"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authorize_guard_1 = require("./authorize.guard");
describe('AuthorizeGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authorize_guard_1.AuthorizeGuard]
        });
    });
    it('should ...', testing_1.inject([authorize_guard_1.AuthorizeGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=authorize.guard.spec.js.map