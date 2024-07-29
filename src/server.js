const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 9876;

app.use(cors());
app.use(bodyParser.json());