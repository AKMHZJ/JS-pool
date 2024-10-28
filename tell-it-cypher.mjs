import { argv } from 'node:process';
import fs from 'node:fs/promises';
import { Buffer } from 'node:buffer';

async function cypher() {
    let fileName = argv[2];
    const action = argv[3];

    const outputFileName = argv[4] || (action === 'encode' ? 'cypher.txt' : 'clear.txt');

    try {
        const content = await fs.readFile(fileName, 'utf-8');
        if (action === 'encode') {
            const encodedContent = Buffer.from(content, 'utf-8').toString('base64');
            await fs.writeFile(outputFileName, encodedContent);
        } else if (action === 'decode') {
            const decodedContent = Buffer.from(content, 'base64').toString('utf-8');
            await fs.writeFile(outputFileName, decodedContent);
        } else {
            console.error('Invalid action. Use "encode" or "decode".');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

cypher();
