const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.products = [
    {
        name: "Iphone XS",
        category: "Smartphone",
        price: 5000
    },
    {
        name: "Samsung Galaxy S10",
        category: "Smartphone",
        price: 3000
    },
    {
        name: "Huawei Mate 20 Pro",
        category: "Smartphone",
        price: 3500
    }
];

app.get('/products', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/products', (req, res) => {
    if (!req.body) {
      return res.status(500).json({ message: 'Body is missing' });
    }
  
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(500).json({ message: 'Invalid body format' });
    }
  
    if (price < 0) {
      return res.status(500).json({ message: 'Price should be a positive number' });
    }
    const existingProduct = products.find(p => p.name === name);
  if (existingProduct) {
    return res.status(500).json({ message: 'Product already exists' });
  }

  products.push({ name, price });
  return res.status(201).send('Product created');
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });

module.exports = app;