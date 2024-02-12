const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// this is for actual storage of data
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/User');
    console.log('db connected');
}

const contactus = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const contact = mongoose.model('contact', contactus);

const server = express();

server.use(cors());
server.use(bodyParser.json())

server.post("/", async (req, res) => {
    let system = new Qms();
    system.name = req.body.name;
    system.email = req.body.email;
    system.message = req.body.message;
    const doc = await system.save();
    console.log(doc);
    res.send(doc);
})

server.listen(8000, () => {
    console.log("server started")
})