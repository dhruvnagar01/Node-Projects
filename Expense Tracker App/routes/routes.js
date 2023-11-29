const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', controller.getData);
router.post('/create-expense', controller.createExpense);
router.get('/expenses/edit',controller.getById);
router.post('/expenses/edit',controller.updateExpense);
router.get('/expenses/delete', controller.deleteById);
module.exports = router;