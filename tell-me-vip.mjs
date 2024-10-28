import fs from 'node:fs/promises'
import { argv } from 'node:process'
import { resolve } from 'node:path'

async function  tellMeVip() {
    const directorypath =  argv[2] ? resolve(argv[2]) : process.cwd()
    try {
            const content = await fs.readdir(directorypath)
            content.sort((a, b) => {
                let partsA = a.replace('.json', '').split('_');
                let partsB = b.replace('.json', '').split('_');
                
                if (partsA.length < 2 || partsB.length < 2) {
                    console.warn('Filename does not match expected format:', a, b);
                    return 0; // or handle accordingly
                }
                
                let secondWordA = partsA[1];
                let secondWordB = partsB[1];
                
                return secondWordA.localeCompare(secondWordB);
            });
            let i=0;
            let arr = []
            for (let value of content){
                const fullPath = (directorypath+ '/'+value);
                
                const data = await fs.readFile(fullPath, 'utf-8')
                
                let info = JSON.parse(data)
                for (let key in info){
                    if (key === "answer" && info[key] === 'yes') {
                        arr.push(value);
                    }
                }
            }
            let final = ''
            for (let res of arr){
                let result = res.replace('_', ' ').replace('.json', '')
                let words = result.split(' ');
                if (words.length > 1) {
                    [words[0], words[1]] = [words[1], words[0]];
                    result = words.join(' ');
                }
                
                final+= `${i+1}. ${result}`;
                if (i < arr.length-1){
                    final+= '\n'
                }
                i++;
            }
            await fs.writeFile("vip.txt", final)
    }catch(error){
        console.log(error.message)
    }
}

tellMeVip()