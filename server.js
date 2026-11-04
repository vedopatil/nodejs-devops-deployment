const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, NextAstra!</h1><p>Version 3: Automatic CI/CD deployment verified and rechecked.</p>');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Application is running',
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});