const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// Setup appress data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"))

// API routes
// TODO: build method for pushing/POSt new friend to friends in apiRoutes
// Use constructor?...
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, (error, results)=>{
    if (error) throw error;
    console.log("Listening on PORT: 8080...");
});