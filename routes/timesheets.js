var express = require('express');
var router = express.Router();


// Require our controllers.
var timesheet_controller = require('../controllers/timesheetController'); 

/// TIMESHEET ROUTES ///

// GET timesheet home page.
// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/timesheet/
// router.get('/', timesheet_controller.index);  

// GET timesheet timsheetlist page.
// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/timesheet/timesheetlist
// router.get('/timesheetlist', timesheet_controller.timesheet_list);  

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', timesheet_controller.create_post); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', timesheet_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/timesheets/create
router.post('/:user_id/timesheets/create', timesheet_controller.create_timesheet_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/timesheets/:timesheet_id/destroy
router.get('/:user_id/timesheets/:timesheet_id/destroy', timesheet_controller.delete_user_timesheet_get);



module.exports = router;