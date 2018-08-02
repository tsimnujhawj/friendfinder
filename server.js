const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

const exp = express();
const PORT = 8080;

// Setup Express data parsing
exp.use(bodyParser.urlencoded({ extended: true }));
exp.use(bodyParser.json());

// API routes
// require("./routing/apiRoutes")(exp);
// require("./routing/htmlRoutes")(exp);

exp.listen(PORT, (error, results)=>{
    if (error) throw error;
    console.log("Listening on PORT: 8080...");
});