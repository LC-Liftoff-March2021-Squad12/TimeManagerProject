"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authorize_interceptor_1 = require("./authorize.interceptor");
describe('AuthorizeInterceptor', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authorize_interceptor_1.AuthorizeInterceptor]
        });
    });
    it('should be created', testing_1.inject([authorize_interceptor_1.AuthorizeInterceptor], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=authorize.interceptor.spec.js.map