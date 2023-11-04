var express = require("express");
var cors = require("cors");

var routes = require("./routes");
const bodyParser = require("body-parser");

var app = express();

// enable cors
app.use(cors());
app.options("*", cors());

//convert into json
app.use(bodyParser.json());

app.use("/", routes);

module.exports = app;
