var express = require('express');
var router = express.Router();


// Require our controllers.
var teamemeka_controller = require('../controllers/teamemekaController'); 

/// TEAMEMEKA ROUTES ///

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.get('/create', teamemeka_controller.create_get);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', teamemeka_controller.create_post); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', teamemeka_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamemekas/create
router.post('/:user_id/teamemekas/create', teamemeka_controller.create_teamemeka_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamemekas/:teamemeka_id/destroy
router.get('/:user_id/teamemekas/:teamemeka_id/destroy', teamemeka_controller.delete_user_teamemeka_get);



module.exports = router;