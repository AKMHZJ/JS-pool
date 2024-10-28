import fs from 'node:fs/promises'
import { argv } from 'node:process'
import { resolve } from 'node:path'
import { error } from 'node:console'

async function tellMeWho(){
    const directorypath =  argv[2] ? resolve(argv[2]) : process.cwd()
    try{
        const content = await fs.readdir(directorypath)
        content.sort((a, b) => {
            let secondWordA = a.replace('.json', '').split('_')[1];
        let secondWordB = b.replace('.json', '').split('_')[1];
            return secondWordA.localeCompare(secondWordB);
        });
        let i =0;
        for (const value of content) {
            let result = value.replace('_', ' ').replace('.json', '')
            let words = result.split(' ');
            if (words.length > 1) {
            [words[0], words[1]] = [words[1], words[0]];
            result = words.join(' ');
            }
            console.log("%d. %s",i+1,result)
            i++;
        }
    }catch{
        console.log(error)
    }
}

tellMeWho()