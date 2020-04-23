const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = 8080;

// 1. Server must listen
app.listen(PORT, () => console.log('Listening on PORT: ', PORT));


// 2. Implement middleware
app.use(express.static('.'));


