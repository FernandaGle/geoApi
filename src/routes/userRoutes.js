const express = require('express');
const { registerUserToEvent } = require('../controllers/eventController');

const router = express.Router();

router.post('/register', registerUserToEvent);

module.exports = router;

