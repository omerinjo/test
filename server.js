require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const logger = require('morgan');
const app = express();


// Config middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

// Load routes
const Routes = require('./routes');
const _routesArr = Object.keys(Routes);

// Dynamic load routes
_routesArr.forEach(r => {
    const route = Routes[r];
    app.use('/api', route);
});

app.listen(3000, () => console.log("server radi"))