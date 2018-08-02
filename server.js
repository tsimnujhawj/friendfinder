const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// Setup appress data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes
// TODO: build dummy array for friend in apiRoutes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, (error, results)=>{
    if (error) throw error;
    console.log("Listening on PORT: 8080...");
});