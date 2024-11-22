import Event, { find, findById } from '/Users/fernandaglez/geoApi/geoApi/src/models/event';
const { sendEmail } = require('../emailService');

// Crear un nuevo evento
export async function createEvent(req, res) {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Obtener todos los eventos
export async function getEvents(req, res) {
    try {
        const events = await find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Obtener un evento por ID
export async function getEventById(req, res) {
    try {
        const event = await findById(req.params.id);
        if (!event) return res.status(404).json({ error: 'Event not found' });
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }


}


// Controlador para crear un evento
const createEvent = async (req, res) => {
  try {
    const { title, date, location, organizer, email } = req.body;

    // Simula guardar el evento en la base de datos
    const newEvent = { title, date, location, organizer };

    // Envía un correo al organizador
    const emailSubject = `Evento creado: ${title}`;
    const emailBody = `Hola ${organizer},\n\nTu evento "${title}" ha sido creado exitosamente.\nFecha: ${date}\nLugar: ${location}\n\n¡Gracias por usar nuestra plataforma!`;

    const emailResult = await sendEmail(email, emailSubject, emailBody);

    res.status(201).json({
      message: 'Evento creado exitosamente',
      event: newEvent,
      emailResult,
    });
  } catch (error) {
    console.error('Error al crear el evento:', error);
    res.status(500).json({ error: 'Error al crear el evento' });
  }
};

module.exports = { createEvent };
