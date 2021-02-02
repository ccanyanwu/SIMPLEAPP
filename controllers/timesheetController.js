var models = require('../models/index');

// exports.index = function (req, res) {
// 	 res.redirect('/timesheetlist');
// };


// exports.timesheet_list = function (req, res) {
// 	models.Timesheet.findAll({
// 		include: [ models.User ]
//  }).then(function (timesheets) {
// 	 res.render('timesheet_list', {
//       title: 'Timesheet list',
//       timesheets: timesheets
//     });


// 	});
// };

// exports.timesheet_detail = function (req, res) {
// 	var id = req.params.id;
// 	models.User.findById(id).then(function (timesheet) {
// 		res.render('timesheet_detail', {
//       title: 'Single Timesheet record',
//       timesheets: timesheet
//     });
// 	});
// };


exports.create_post = function (req, res) {
	models.User.create({
		username: req.body.username
	}).then(function () {
		res.redirect('/');
	});
};

exports.delete_user_get = function (req, res) {
	models.User.destroy({
		where: {
			id: req.params.user_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_timesheet_post = function (req, res) {
	models.Timesheet.create({
		title: req.body.title,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_timesheet_get = function (req, res) {
	models.Timesheet.destroy({
		where: {
			id: req.params.timesheet_id
		}
	}).then(function () {
		res.redirect('/');
	});
};