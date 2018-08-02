let friendsObj = require("../app/data/friends");

module.exports = (app)=>{
    app.get("/api/friends", (req, res)=>{
        res.json(friendsObj);
    })

    // TODO: set POST method
    // app.post("/api/friends", (req, res)=>{
    //     friendsObj.push(req.body);
    //     res.json(true);
    // })

}