var models = require('../models/index');

//create GET for users

exports.create_get = function (req, res) {
	 // create user GET controller logic here 
	 res.render('/user_form', { title: 'Create User',  layout: 'layout'});
};

//create POST for users
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

exports.create_teamemeka_post = function (req, res) {
	models.Teamemeka.create({
		title: req.body.title,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_teamemeka_get = function (req, res) {
	models.Teamemeka.destroy({
		where: {
			id: req.params.teamemeka_id
		}
	}).then(function () {
		res.redirect('/');
	});
};