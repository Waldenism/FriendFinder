var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		
		//user
		var uInput = req.body;
		var uAnswers = uInput.scores;

		var matchName;
		var matchImg;
		var absoluteDiff = 1000;

		console.log(uAnswers);

		for(var i = 0; i < friends.length; i++) {
			var diff = 0;			

			for(var j = 0; j < uAnswers.length; j++) {
				diff += Math.abs(friends[i].scores[j] - uAnswers[j]);
			}

			

			if (diff < absoluteDiff) {

				absoluteDiff = diff;
				matchName = friends[i].name;
				matchImg = friends[i].photo;
			}
		}

		friends.push(uInput);

		res.json({ status: 'OK', matchName: matchName, matchImg:matchImg });
	});
};