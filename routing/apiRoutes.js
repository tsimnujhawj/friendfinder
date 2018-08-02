const friendsArr = require("../app/data/friends");

module.exports = (app)=>{
    app.get("/api/friends", (req, res)=>{
        res.json(friendsArr);
    })
}