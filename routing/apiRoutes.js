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
        let bestFriend = {
            name: "",
            picture: "",
            friendDiff: 1000
        };

        console.log(userScores);
        // loop through the friends list
        for (let i = 0; i < friendsObj.length; i++){
            let difference = 0;
            // loop through the user's score
            for (let j = 0; j < userScores.length; j++){
                // concate the total
                difference += Math.abs(parseInt(friendsObj[i].scores[j]) - parseInt(userScores[j]))
            }
            console.log(difference);
            console.log(totalDiff);
            if (difference <= bestFriend.friendDiff){
                bestFriend.name = friendsObj[i].name;
                bestFriend.picture = friendsObj[i].photo;
                bestFriend.friendDiff = difference;
            }
        }
        friendsObj.push(req.body);
        console.log("data posted")
        console.log(bestFriend.name + " Pic: " + bestFriend.picture)
        res.json({status: "Okay", matchedName: bestFriend.name, matchedPic: bestFriend.picture});
    })

}