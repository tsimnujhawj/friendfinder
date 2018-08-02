const path = require("path")

module.exports = (app) => {
    // HTML GET Requests
    // handle the files user GETS from visiting a route

    app.get("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })};