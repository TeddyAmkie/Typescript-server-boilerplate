"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const Errors_1 = require("./Errors");
const app = express_1.default();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// define a route handler for the default home page
app.get("/", (req, res, next) => {
    try {
        throw new Errors_1.ExpressError("Not like this", 300);
    }
    catch (error) {
        return next(error);
    }
    // res.send("Hello world!");
});
/** 404 handler */
app.use((req, res, next) => {
    const err = new Errors_1.ExpressError("Not Found", 404);
    // pass the error to the next piece of middleware
    return next(err);
});
/** general error handler */
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    // tslint:disable-next-line:no-console
    console.error(err.stack);
    return res.json({
        message: err.message,
        status: err.status
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map