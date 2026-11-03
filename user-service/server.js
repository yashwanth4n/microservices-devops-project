const express = require('express');

const app = express();
app.use(express.json());

const users = [
    { id: 1, name: "Yash", email: "yash@example.com" },
    { id: 2, name: "Rahul", email: "rahul@example.com" }
];

app.get('/', (req, res) => {
    res.send('User Service is running!');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`User Service running on port ${PORT}`);
});