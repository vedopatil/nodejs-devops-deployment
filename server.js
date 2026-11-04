
const express = require('express');

const app = express();
const PORT = 3000; // application port

app.get('/', (req, res) => { // main dashboard
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DevOps Deployment | NextAstra</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                background: #0b1120;
                color: #e5e7eb;
                min-height: 100vh;
                padding: 40px 20px;
            }

            .container {
                max-width: 1000px;
                margin: auto;
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                margin-bottom: 65px;
            }

            .brand {
                font-size: 19px;
                font-weight: bold;
                letter-spacing: 0.5px;
            }

            .brand span {
                color: #60a5fa;
            }

            .status {
                color: #86efac;
                border: 1px solid #166534;
                background: #052e16;
                padding: 9px 14px;
                border-radius: 20px;
                font-size: 12px;
            }

            .hero {
                margin-bottom: 45px;
            }

            .eyebrow {
                color: #60a5fa;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 12px;
                margin-bottom: 18px;
            }

            h1 {
                font-size: clamp(34px, 6vw, 55px);
                line-height: 1.12;
                margin-bottom: 18px;
                color: #f9fafb;
            }

            h1 span {
                color: #60a5fa;
            }

            .description {
                color: #9ca3af;
                line-height: 1.8;
                max-width: 650px;
                font-size: 15px;
            }

            .section-title {
                font-size: 17px;
                margin-bottom: 18px;
                color: #f3f4f6;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
                gap: 14px;
                margin-bottom: 42px;
            }

            .card {
                background: #111c30;
                border: 1px solid #24334b;
                border-radius: 12px;
                padding: 22px;
            }

            .card h3 {
                font-size: 14px;
                margin-bottom: 10px;
                color: #d1d5db;
            }

            .card p {
                font-size: 12px;
                color: #9ca3af;
                line-height: 1.6;
            }

            .architecture {
                background: #111c30;
                border: 1px solid #24334b;
                border-radius: 12px;
                padding: 25px;
                margin-bottom: 35px;
            }

            .flow {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 10px;
                margin-top: 20px;
            }

            .node {
                background: #1e293b;
                border: 1px solid #334155;
                border-radius: 8px;
                padding: 12px 15px;
                font-size: 13px;
            }

            .arrow {
                color: #60a5fa;
            }

            .health-link {
                display: inline-block;
                background: #2563eb;
                color: white;
                text-decoration: none;
                padding: 12px 18px;
                border-radius: 7px;
                font-size: 13px;
                margin-top: 8px;
            }

            .health-link:hover {
                background: #1d4ed8;
            }

            footer {
                border-top: 1px solid #24334b;
                padding-top: 22px;
                color: #6b7280;
                font-size: 12px;
                line-height: 1.8;
            }

            @media (max-width: 600px) {
                body {
                    padding: 25px 16px;
                }

                header {
                    margin-bottom: 45px;
                }

                .flow {
                    align-items: flex-start;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">

            <header>
                <div class="brand">NEXTASTRA <span> / DEVOPS</span></div>
                <div class="status">● APPLICATION ONLINE</div>
            </header>

            <main>
                <section class="hero">
                    <div class="eyebrow">Deployment project</div>
                    <h1>Built. Deployed.<br><span>Running.</span></h1>
                    <p class="description">
                        A Node.js application deployed on Ubuntu with an automated
                        CI/CD pipeline. Changes pushed to GitHub are automatically
                        deployed through Jenkins, managed by PM2 and served through Nginx.
                    </p>
                </section>

                <h2 class="section-title">Deployment stack</h2>

                <section class="grid">
                    <div class="card">
                        <h3>Node.js</h3>
                        <p>Application runtime powering the web service.</p>
                    </div>

                    <div class="card">
                        <h3>PM2</h3>
                        <p>Process management, application restarts and logs.</p>
                    </div>

                    <div class="card">
                        <h3>Nginx</h3>
                        <p>Reverse proxy forwarding requests to the application.</p>
                    </div>

                    <div class="card">
                        <h3>Jenkins</h3>
                        <p>Automated checkout, deployment and verification.</p>
                    </div>
                </section>

                <section class="architecture">
                    <h2 class="section-title">Application traffic flow</h2>
                    <p class="description">
                        Incoming public requests are securely routed to the application.
                    </p>

                    <div class="flow">
                        <div class="node">Browser</div>
                        <span class="arrow">→</span>
                        <div class="node">Cloudflare</div>
                        <span class="arrow">→</span>
                        <div class="node">Tunnel</div>
                        <span class="arrow">→</span>
                        <div class="node">Nginx :80</div>
                        <span class="arrow">→</span>
                        <div class="node">Node.js :3000</div>
                    </div>
                </section>

                <section>
                    <h2 class="section-title">Service health</h2>
                    <p class="description">
                        The application exposes a health endpoint for automated
                        deployment verification and service checks.
                    </p>
                    <a class="health-link" href="/health">View health endpoint →</a>
                </section>
            </main>

            <footer>
                <p>Node.js · Ubuntu · PM2 · Nginx · Jenkins · Cloudflare Tunnel</p>
                <p>Automated deployment project | NextAstra assignment</p>
            </footer>

        </div>
    </body>
    </html>
    `);
});

app.get('/health', (req, res) => { // health check endpoint
    res.json({
        status: 'OK',
        message: 'Application is running',
        uptime: process.uptime()
    });
});

app.listen(PORT, () => { // start the server
    console.log(`Server running at http://localhost:${PORT}/`);
});
