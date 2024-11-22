const express = require('express');
const router = express.Router();
const eventController = require('./eventController');

router.post('/events', eventController.createEvent);
router.get('/events', eventController.getEvents);
router.get('/events/:id', eventController.getEventById);



const express = require('express');
const { createEvent } = require('../controllers/eventController');
router.post('/events', createEvent);
module.exports = router;
