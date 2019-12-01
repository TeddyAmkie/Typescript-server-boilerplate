"use strict";
/** Shared config for application; can be req'd many places. */
Object.defineProperty(exports, "__esModule", { value: true });
// require("dotenv").config();
exports.SECRET_KEY = process.env.SECRET_KEY || "test";
exports.PORT = +process.env.PORT || 1337;
if (process.env.NODE_ENV === "test") {
    exports.DB_URI = "default-test";
}
else {
    exports.DB_URI = process.env.DATABASE_URL || "default-db";
}
//# sourceMappingURL=config.js.map