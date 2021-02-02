var models = require('../models/index');

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

exports.create_task_post = function (req, res) {
	models.Task.create({
		title: req.body.title,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_task_get = function (req, res) {
	models.Task.destroy({
		where: {
			id: req.params.task_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_timesheet_post = function (req, res) {
	models.Timesheet.create({
		name: req.body.name,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_timesheet_get = function (req, res) {
	models.Timesheet.destroy({
		where: {
			id: req.params.task_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_teamjide_post = function (req, res) {
	models.Teamjide.create({
		name: req.body.name,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_teamjide_get = function (req, res) {
	models.Teamjide.destroy({
		where: {
			id: req.params.task_id
		}
	}).then(function () {
		res.redirect('/');
	});
};