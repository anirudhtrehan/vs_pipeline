"use strict";
exports.__esModule = true;
exports.TestUtils = void 0;
var spectron_1 = require("spectron");
var TestUtils = /** @class */ (function () {
    function TestUtils() {
        this.windowsCount = 2;
    }
    TestUtils.prototype.windowByIndex = function () { return this.windowsCount - 1; };
    TestUtils.prototype.setUp = function () {
        // start application
        this.app = new spectron_1.Application({
            // path to electron app
            // args: ["../src/main.js"],
            path: 'D:\\my-electron-app\\build\\my-electron-app Setup 1.0.0.exe',
            //path: "" + electron,
            startTimeout: 30000,
            waitTimeout: 30000
        });
        return this.app.start();
    };
    TestUtils.prototype.tearDown = function () {
        // close browser
        //const windows = this.app.client.windowHandles() as any;
        //this.app.client.close(windows.sessionId);
        return this.app.stop();
    };
    return TestUtils;
}());
exports.TestUtils = TestUtils;
