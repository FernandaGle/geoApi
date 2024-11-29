const mongoose = require('mongoose');

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
    default: false, 
  },
}, { timestamps: true });

userSchema.methods.registerToEvent = async function (eventId) {
  try {
    const Event = mongoose.model('Event'); 
    const event = await Event.findById(eventId);

    if (!event) {
      throw new Error('Evento no encontrado');
    }

    event.participants.push(this._id); 
    await event.save();

    return event; 
  } catch (error) {
    console.error('Error al registrar usuario al evento:', error);
    throw error; 
  }
};


const User = mongoose.model('User', userSchema);

module.exports = User;
