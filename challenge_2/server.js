// Use Express to serve up an index.html file and its associated assets
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs')
const axios = require('axios')

// Promisify fs

// 1. Listen (LISTEN)
app.listen(PORT, () => console.log('Listening on PORT: ', PORT))

// 2. Use Middlewar (USE)
app.use(express.static('client'));
app.use(bodyParser());

// 3. Route requests by type (GET)
app.post('/', (req, res) => {

})

// 4. Handle requests / database querying


// 5. Respond to the client (different file?)
