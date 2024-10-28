import http, { request } from 'http';
import fs from 'fs/promises';

const port = 5000;

const server = http.createServer(async (req, res) => {

    try {
        if (req.method !== 'GET') {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'fot found' }));
            return;
        }
        
        const data = await fs.readFile(`guests${req.url}.json`, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'guest not found' }));
        } else {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
        }
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${'http://localhost:'}${port}`);
});
