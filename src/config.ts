/** Shared config for application; can be req'd many places. */

// require("dotenv").config();

export const SECRET_KEY = process.env.SECRET_KEY || "test";

export const PORT = +process.env.PORT || 1337;

// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'shoply-test'
// - else: 'shoply'

export let DB_URI: string;

if (process.env.NODE_ENV === "test") {
  DB_URI = "default-test";
} else {
  DB_URI = process.env.DATABASE_URL || "default-db";
}
