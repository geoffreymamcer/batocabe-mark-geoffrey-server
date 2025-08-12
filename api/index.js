const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

// Export the app as a serverless function
module.exports = app;
