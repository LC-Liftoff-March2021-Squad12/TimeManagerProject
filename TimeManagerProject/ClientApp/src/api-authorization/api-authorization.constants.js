"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationPaths = exports.LoginActions = exports.LogoutActions = exports.QueryParameterNames = exports.ReturnUrlType = exports.ApplicationName = void 0;
exports.ApplicationName = 'TimeManagerProject';
exports.ReturnUrlType = 'returnUrl';
exports.QueryParameterNames = {
    ReturnUrl: exports.ReturnUrlType,
    Message: 'message'
};
exports.LogoutActions = {
    LogoutCallback: 'logout-callback',
    Logout: 'logout',
    LoggedOut: 'logged-out'
};
exports.LoginActions = {
    Login: 'login',
    LoginCallback: 'login-callback',
    LoginFailed: 'login-failed',
    Profile: 'profile',
    Register: 'register'
};
var applicationPaths = {
    DefaultLoginRedirectPath: '/',
    ApiAuthorizationClientConfigurationUrl: "_configuration/" + exports.ApplicationName,
    Login: "authentication/" + exports.LoginActions.Login,
    LoginFailed: "authentication/" + exports.LoginActions.LoginFailed,
    LoginCallback: "authentication/" + exports.LoginActions.LoginCallback,
    Register: "authentication/" + exports.LoginActions.Register,
    Profile: "authentication/" + exports.LoginActions.Profile,
    LogOut: "authentication/" + exports.LogoutActions.Logout,
    LoggedOut: "authentication/" + exports.LogoutActions.LoggedOut,
    LogOutCallback: "authentication/" + exports.LogoutActions.LogoutCallback,
    LoginPathComponents: [],
    LoginFailedPathComponents: [],
    LoginCallbackPathComponents: [],
    RegisterPathComponents: [],
    ProfilePathComponents: [],
    LogOutPathComponents: [],
    LoggedOutPathComponents: [],
    LogOutCallbackPathComponents: [],
    IdentityRegisterPath: 'Identity/Account/Register',
    IdentityManagePath: 'Identity/Account/Manage'
};
applicationPaths = __assign(__assign({}, applicationPaths), { LoginPathComponents: applicationPaths.Login.split('/'), LoginFailedPathComponents: applicationPaths.LoginFailed.split('/'), RegisterPathComponents: applicationPaths.Register.split('/'), ProfilePathComponents: applicationPaths.Profile.split('/'), LogOutPathComponents: applicationPaths.LogOut.split('/'), LoggedOutPathComponents: applicationPaths.LoggedOut.split('/'), LogOutCallbackPathComponents: applicationPaths.LogOutCallback.split('/') });
exports.ApplicationPaths = applicationPaths;
//# sourceMappingURL=api-authorization.constants.js.map