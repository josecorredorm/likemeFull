require('./database/db.js')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/index.js');


const app = express();


//middleware
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

//rutas
app.use("/", routes);

module.exports = app;