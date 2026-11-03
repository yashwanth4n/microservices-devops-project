const express = require('express');

const app = express();
app.use(express.json());

const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 2000 }
];

app.get('/', (req, res) => {
    res.send('Product Service is running!');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
});

const PORT = 4000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Product Service running on port ${PORT}`);
});