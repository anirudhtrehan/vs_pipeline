"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var chai_1 = require("chai");
var Helpers_1 = require("../Helpers/Helpers");
var TestUtils_1 = require("../Helpers/TestUtils");
describe("Initial test suite", function () {
    var utils;
    var app;
    var helpers;
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // set app instance
                    utils = new TestUtils_1.TestUtils();
                    return [4 /*yield*/, utils.setUp()];
                case 1:
                    app = _a.sent();
                    if (!(app && app.isRunning())) return [3 /*break*/, 3];
                    helpers = new Helpers_1.Helpers(app);
                    return [4 /*yield*/, app.client.windowByIndex(utils.windowByIndex())];
                case 2: return [2 /*return*/, _a.sent()]; // select window by Id
                case 3:
                    console.log("Application not running");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
    after(function () {
        // close browser
        utils.tearDown();
    });
    it("h1 should be Hello World!", function () { return __awaiter(void 0, void 0, void 0, function () {
        var actualHeader;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, helpers.getText("h1")];
                case 1:
                    actualHeader = _a.sent();
                    chai_1.expect(actualHeader).to.equals("Hello World!");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should check the existance of h1", function () { return __awaiter(void 0, void 0, void 0, function () {
        var existH1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, helpers.isElementPresent('h1')];
                case 1:
                    existH1 = _a.sent();
                    chai_1.expect(existH1)["true"];
                    return [2 /*return*/];
            }
        });
    }); });
});
