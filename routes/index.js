// var models  = require('../models/index');
var express = require('express');
var router  = express.Router();

// Require our controllers.
var index_controller = require('../controllers/indexController'); 


// GET home page.
// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/
router.get('/', index_controller.index);  

module.exports = router;

 