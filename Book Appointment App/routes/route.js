const express = require('express');
const router = express.Router();

const bookController = require('../controller/book')

const path = require('path');

router.get('/', bookController.getData);

router.post('/add-appointment', bookController.postData);

router.get('/delete-appointment', bookController.deleteData);

router.get('/edit-appointment', bookController.getById);

router.post('/update-appointment', bookController.updateById);

router.post('/search-appointment', bookController.searchAppointment)

module.exports = router;