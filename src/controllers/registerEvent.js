const mongoose = require('mongoose');

// Esquema del usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isEmailSent: {
    type: Boolean,
    default: false, // Por defecto, no se ha enviado el email
  },
}, { timestamps: true });

// Método para registrar un usuario a un evento
userSchema.methods.registerToEvent = async function (eventId) {
  try {
    const Event = mongoose.model('Event'); // Referencia al modelo del evento
    const event = await Event.findById(eventId);

    if (!event) {
      throw new Error('Evento no encontrado');
    }

    // Registrar al usuario en el evento
    event.participants.push(this._id); // Agregar el usuario a la lista de participantes del evento
    await event.save();

    return event; // Retorna el evento actualizado
  } catch (error) {
    console.error('Error al registrar usuario al evento:', error);
    throw error; // Lanzar error si algo falla
  }
};

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
