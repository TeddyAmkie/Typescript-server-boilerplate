"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// export const ExpressError = function(message: string, status: number) {
//     Error.captureStackTrace(this, this.constructor);
//     this.name = this.constructor.name;
//     this.message = message;
//     this.status = status;
// };
// util.inherits(ExpressError, Error);
class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
        if (process.env.NODE_ENV !== "test") {
            // tslint:disable-next-line:no-console
            console.error(this.stack);
        }
    }
}
exports.ExpressError = ExpressError;
//# sourceMappingURL=Errors.js.map