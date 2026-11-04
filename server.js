const express = require('express'); // importing express

const app = express();
const PORT = 3000; // application port

app.get('/', (req, res) => { // homepage route
    res.send('<h1>Hello, NextAstra!</h1><p>Version 3: Automatic CI/CD deployment verified and rechecked.</p>');
});

app.get('/health', (req, res) => { // health check endpoint
    res.json({
        status: 'OK',
        message: 'Application is running',
        uptime: process.uptime() // time since the application started
    });
});

app.listen(PORT, () => { // start the server
    console.log(`Server running at http://localhost:${PORT}`);
});