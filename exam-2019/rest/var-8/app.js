const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.students = [
    {
        name: "Gigel",
        surname: "Popel",
        age: 23
    },
    {
        name: "Gigescu",
        surname: "Ionel",
        age: 25
    }
];

app.get('/students', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/students', (req, res, next) => {
    if(!req.body  || Object.keys(req.body).length === 0){
        res.status(500).json({message: "Body is missing"});
    }
    
})

module.exports = app;