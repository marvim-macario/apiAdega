const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

/* GET home page. */
router.post('/login', loginController.find);

module.exports = router;
