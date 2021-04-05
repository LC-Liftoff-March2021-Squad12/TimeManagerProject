"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authorize_service_1 = require("./authorize.service");
describe('AuthorizeService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authorize_service_1.AuthorizeService]
        });
    });
    it('should be created', testing_1.inject([authorize_service_1.AuthorizeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=authorize.service.spec.js.map