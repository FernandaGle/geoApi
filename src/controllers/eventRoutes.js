const express = require('express');
const router = express.Router();
const eventController = require('./eventController');
const { registerUserToEvent } = require('../controllers/eventController');

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getEvents);
router.get('/events/:id', eventController.getEventById);
router.post('/register', registerUserToEvent);// Ruta para registrar un usuario en un event


const express = require('express');
const { createEvent } = require('../controllers/eventController');
router.post('/events', createEvent);
module.exports = router;




