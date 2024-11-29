const express = require('express');
const { registerUserToEvent } = require('../controllers/eventController');

const router = express.Router();

// Ruta para registrar un usuario en un evento
router.post('/register', registerUserToEvent);

module.exports = router;
