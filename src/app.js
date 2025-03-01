const express = require("express");
const routes = require("./routes");

const app = express();

app.use(routes);
app.use(express.json());

module.exports = app;