const express = require('express');
const Imagerouter = require('./routes/images');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.static('upload'));

// Routes
app.use('/', Imagerouter);

const port = process.env.PORT || 5004;
app.listen(port, () => console.log('App listening on port ', port));
