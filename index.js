// === Express API ===/
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;
const router = require('./backend/routes/index')

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(router);

// === Mongo DB ===/

const db = require('./mongoose/dbHelper');

app.listen(port, () => {
    console.log(`listening on ${port}`);
});