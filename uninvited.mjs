import http from 'http';
import fs from 'fs/promises';

const port = 5000;

const server = http.createServer(async (req, res) => {

    if (req.method === 'POST') {
        try {
            if (req.headers['content-type'] !== 'application/json') {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'bad request: expected JSON' }));
                return;
            }

            let body = '';
            req.on('data', chunk => {
                body += chunk;
            });

            req.on('end', async () => {
                try {
                    const guestData = JSON.parse(body);

                    await fs.writeFile(`guests${req.url}.json`, JSON.stringify(guestData, null, 2), 'utf-8');

                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(guestData));
                } catch (error) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'server failed' }));
                }
            });
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'not found' }));
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is listening on port ${'http://localhost:'}${port}`);
});
