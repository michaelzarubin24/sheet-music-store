const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const { sheetRouter } = require("./routes/sheet.router");


const app = express();

app.use(cors());
app.use(bodyParser.json());

connect();


app.use('', sheetRouter),
app.use("/", (req, res) => {
    return res.json({
        msg: "Initial page"
    })
});



async function connect() {
    try {
        await mongoose.connect("mongodb+srv://dbMichael:michaelzarubin@cluster0.rr2pz7s.mongodb.net/?retryWrites=true&w=majority");
    }catch(e) {
        console.log('[e.message]', e.message);
    }
}

module.exports = {
    app
}