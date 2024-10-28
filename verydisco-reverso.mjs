import fs from 'node:fs/promises'
import {argv} from 'node:process'

try{
    const contant = await fs.readFile(argv[2], 'utf-8')
    let result = ""
    let splittedword = contant.split(' ')
    for (let i=0; i<splittedword.length; i++){
        let sizeofword = Math.floor(splittedword[i].length/2)
        result += splittedword[i].slice(sizeofword)+splittedword[i].slice(0, sizeofword)
        if (i < splittedword.length-1){
            result += " "
        }
    }
    console.log(result)
} catch{
    console.log(error)
}
