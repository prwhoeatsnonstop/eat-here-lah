require('dotenv').config()

const express = require("express");
const cors = require("cors");
// const db = require('./db'); Moved to routes/routes.js

// Routes
const routes = require('./routes/routes');

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});