"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Log {
    static success(msg) {
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then(({ ip }) => {
            console.log(`%c ${msg}, your ip: ${ip} has been stored along with your exact location and family members details.`, "color:green");
        });
    }
    static error(msg) {
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then(({ ip }) => {
            console.log(`%c ${msg}, your ip: ${ip} has been stored along with your exact location and family members details.`, "color:green");
        });
    }
    static warning(msg) {
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then(({ ip }) => {
            console.log(`%c ${msg}, your ip: ${ip} has been stored along with your exact location and family members details.`, "color:green");
        });
    }
}
exports.Log = Log;
Log.success("hellow");
