var friends = require('../data/friends.js')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  app.post('/api/friends', function (req, res) {
    // user
    var usersInput = req.body
    var usersAnswers = uInput.scores

    var matchName
    var matchImg
    var absoluteDiff = 1000

    for (var i = 0; i < friends.length; i++) {
      var diff = 0

      for (var j = 0; j < usersAnswers.length; j++) {
        diff += Math.abs(friends[i].scores[j] - usersAnswers[j])
      }

      if (diff < absoluteDiff) {
        absoluteDiff = diff
        matchName = friends[i].name
        matchImg = friends[i].photo
      }
    }

    friends.push(usersInput)

    res.json({ status: 'OK', matchName: matchName, matchImg: matchImg })
  })
}
