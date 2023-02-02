const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.cars = [
    {
        make: "BMW",
        model: "X6",
        price: 50000
    },
    {
        make: "Lamborghini",
        model: "Huracan",
        price: 200000
    },
];

app.get('/cars', (req, res) => {
    res.status(200).json(app.locals.cars);
});

app.post('/cars', (req, res, next) => {
    try {
        // req.body
        // TODO
        if (!req.body || Object.keys(req.body).length === 0 ||
        req.body.constructor !== Object) {
          res.status(500).json({ message: "Body is missing" })
        } 
        else if(!req.body.make || !req.body.model || !req.body.price
            || typeof req.body.make !== 'string' || typeof req.body.model !== 'string' ||typeof req.body.price !== 'number'){
            res.status(500).json({message: "Invalid body format"})
        }
        else if(req.body.price <=0){
            res.status(500).json({message: "Price should be a positive number"});
        }
        else if (app.locals.cars.some(car => car.model === req.body.model)) {
            res.status(500).json({message: "Car already exists"})
        }
        else{
            const car = {
                make: req.body.make,
                model: req.body.model,
                price: req.body.price
            }
            app.locals.cars.push(car)
            res.status(201).json({message: "Created"})

        }
      } catch (err) {
        console.warn(err.stack);
        res.status(500).json({ message: "server error" });
      }
})

module.exports = app;