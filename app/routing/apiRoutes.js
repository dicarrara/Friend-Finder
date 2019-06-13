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
    
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
  });
};
