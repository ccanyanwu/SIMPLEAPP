var models = require('../models/index');

exports.index = function (req, res) {
	models.User.findAll({
		// include: [models.Task],
		include: [models.Timesheet],
		include: [models.Teamjide],
		include: [models.Teamemeka]
	}).then(function (users) {
		res.render('index', {
			title: 'Homepage',
			users: users
		});
	});

};