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
exports.__esModule = true;
exports.User = exports.sequelize = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var config = require("../config/config");
var user_1 = require("./user");
exports.User = user_1.User;
var dbOption = config[process.env.NODE_ENV || 'development'];
exports.sequelize = new sequelize_typescript_1.Sequelize(__assign(__assign({}, dbOption), { models: [user_1.User] }));
