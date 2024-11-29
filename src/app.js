require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(express.json());

app.use('/api', eventRoutes);
app.use('/api', eventRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conexión exitosa a MongoDB');
}).catch((err) => {
    console.error('Error al conectar a MongoDB:', err.message);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes'); // Asegúrate de que la ruta esté correctamente importada

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes'); // Asegúrate de que la ruta esté correctamente importada






