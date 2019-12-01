import express from "express";
const app = express();
// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

export default app;
