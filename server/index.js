require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express()

const PORT = process.env.PORT || 5000;


const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server started on port = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()