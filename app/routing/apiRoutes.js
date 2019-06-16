// get info from friends.js
var friends = require("../data/friends.js");

module.exports = function(app) {
  //friends data
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    // compute best match from scores
    var bestMatch = {};

    // ------ compare difference
    var bestMatchIndex = 0;
    var greatestDifference = 40;

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        var differenceInScores = Math.abs(
          friends[i].scores[j] - newFriend.scores[j]
        );
        totalDifference += differenceInScores;
        console.log("difference in score", differenceInScores);
        console.log("Total dif", totalDifference);
      }
      // if the totalDifference in scores is less than the best match so far save that index and difference
      if (totalDifference < greatestDifference) {
        bestMatchIndex = i;
        greatestDifference = totalDifference;
      }
    }

    // the best match index is used to get the best match data from the friends index
    bestMatch = friends[bestMatchIndex];

    friends.push(newFriend);
    res.json(bestMatch);
  });
};
