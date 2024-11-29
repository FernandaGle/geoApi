const User = require('../models/usermodel'); 

const registerUser = async (req, res) => {
  try {
    const { name, lastName, email, age } = req.body;


    if (!name || !lastName || !email || !age) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Crear nuevo usuario, se agregan name, lastName, email, age
    const newUser = new User({ 
      name, 
      lastName,   // Ahora se incluye el apellido
      email, 
      age 
    });
    await newUser.save();

    res.status(201).json({ 
      message: 'Usuario registrado exitosamente', 
      user: {
        id: newUser._id,  
        name: newUser.name,
        lastName: newUser.lastName,
        email: newUser.email,
        age: newUser.age
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { registerUser };

