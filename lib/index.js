"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Log {
    static success(msg) {
        console.log(`%c ${msg}`, "color:green");
    }
    static error(msg) {
        console.log(`%c ${msg}`, "color:red");
    }
    static warning(msg) {
        console.log(`%c ${msg}`, "color:red; background:yellow");
    }
}
exports.Log = Log;
