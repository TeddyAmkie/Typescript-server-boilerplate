"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
exports.default = app;
//# sourceMappingURL=app.js.map