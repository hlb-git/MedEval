const logger = require("./logs/logger.js");
const morgan = require("morgan");
const express = require('express');
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

const morganFormat = ":method :url :status :response-time ms";


app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                    const logObject = {
                        method: message.split(" ")[0],
                        url: message.split(" ")[1],
                        status: message.split(" ")[2],
                        responseTime: message.split(" ")[3],
                    };
                    logger.info(JSON.stringify(logObject));
                },
            },
        })
);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/documentation.html');
});
app.use(patientRoutes);
app.use(doctorRoutes);
app.use(pharmacistRoutes);
app.use(appointmentRoutes);
app.use(waitlistRoutes);
