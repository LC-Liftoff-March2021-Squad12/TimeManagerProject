"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_authorization_module_1 = require("./api-authorization.module");
describe('ApiAuthorizationModule', function () {
    var apiAuthorizationModule;
    beforeEach(function () {
        apiAuthorizationModule = new api_authorization_module_1.ApiAuthorizationModule();
    });
    it('should create an instance', function () {
        expect(apiAuthorizationModule).toBeTruthy();
    });
});
//# sourceMappingURL=api-authorization.module.spec.js.map