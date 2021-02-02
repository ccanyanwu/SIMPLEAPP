var express = require('express');
var router = express.Router();


// Require our controllers.
var teamjide_controller = require('../controllers/teamjideController'); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', teamjide_controller.create_post); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', teamjide_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamjides/create
router.post('/:user_id/teamjides/create', teamjide_controller.create_teamjide_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamjides/:teamjide_id/destroy
router.get('/:user_id/teamjides/:timesheet_id/destroy', teamjide_controller.delete_user_teamjide_get);

module.exports = router;