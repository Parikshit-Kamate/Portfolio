const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/b0506')
    .then(() => console.log('connected to mongodb'))
    .catch((error) => console.log(error))


const personalSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    message: String
})





const Portfolio = mongoose.model('Portfolio', personalSchema);


app.post('/contact', async (req, res) => {
    try {
        const personal = new Portfolio(req.body);
        await personal.save();
        res.status(201).send(personal)
    }
    catch (error) {
        res.status(400).send(error)
    }
})


app.listen(8000, () => {
    console.log('server is running on port 8000')
})





