const express = require('express');
const models = require('./models/index');
const sequelize = require('./config/db_connection');
const PORT = process.env.PORT || 5000;
const app = express();
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const pharmacistRoutes = require('./routes/pharmacistRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const waitlistRoutes = require('./routes/waitlistRoute');

app.use(express.json());

sequelize.sync({force: false})
.then(() => {
    console.log('Database synced successfully...');
    app.listen(PORT, '0.0.0.0', ()=> {
        console.log(`Server Active: Listening on port ${PORT}...`);
    });
})
.catch(err => console.log('Error syncing database:', err));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/documentation.html');
});

app.use(patientRoutes);
app.use(doctorRoutes);
app.use(pharmacistRoutes);
app.use(appointmentRoutes);
app.use(waitlistRoutes);
