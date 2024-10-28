import fs from 'node:fs/promises'
import {argv} from 'node:process'
import { resolve } from 'node:path';

async function tellMe(){ 
    const directorypath = argv[2] ? resolve(argv[2]) : process.cwd()
    try{
        const content = await fs.readdir(directorypath)
        console.log(content.length)
    } catch{
        console.log(error)
    }
}

tellMe()