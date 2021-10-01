const express = require('express');
const cors = require("cors");
const uploadConfig = require('./config/upload');

require('dotenv/config')

require('express-async-errors')

const port = process.env.PORT || 3333;
const app = express()
const routes = require('./routes/index');

app.use(cors())

app.use(express.json())

app.use("/files", express.static(uploadConfig.directory))

app.use(routes)

app.listen(port, () => console.log(`Listening on port ${port} ...`))