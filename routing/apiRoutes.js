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
    app.post("/api/friends", (req, res)=>{
        let userScores = req.body.scores;
        let matchedName = "";
        let matchedPic = "";
        let totalDiff = 10000;
        console.log(userScores);
        // loop through the friends list
        for (let i = 0; i < friendsObj.length; i++){
            let difference = '';
            // loop through the user's score
            for (let j = 0; j < userScores.length; j++){
                // concate the total
                difference += Math.abs(friendsObj[i].scores[j] - userScores[j])
            }
            console.log(difference);
            if (difference < totalDiff){
                matchedName = friendsObj[i].name;
                matchedPic = friendsObj[i].photo;
            }
        }
        friendsObj.push(req.body);
        console.log("data posted")
        res.json({status: "Okay", matchedName: matchedName, matchedPic: matchedPic});
    })

}