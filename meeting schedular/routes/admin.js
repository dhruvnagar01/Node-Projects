const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.getAll); 
router.get('/scheduledMeeting',controller.deleteById);

router.post('/scheduleMeeting', controller.createMeeting);

module.exports = router;