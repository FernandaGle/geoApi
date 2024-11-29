const User = require('../models/usermodel'); 
const Event = require('../models/eventModel'); 

const registerUserToEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body; 
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const updatedEvent = await user.registerToEvent(eventId);

    res.status(200).json({
      message: 'Usuario registrado exitosamente al evento',
      event: updatedEvent,
    });
  } catch (error) {
    console.error('Error al registrar usuario al evento:', error);
    res.status(500).json({ message: 'Error al registrar usuario al evento' });
  }
};

module.exports = { registerUserToEvent };
