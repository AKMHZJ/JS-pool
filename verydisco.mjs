import {argv} from 'node:process'
let result = ""
let splittedword = argv[2].split(' ')
for (let i=0; i<splittedword.length; i++){
    let sizeofword = Math.ceil(splittedword[i].length/2)
    result += splittedword[i].slice(sizeofword)+splittedword[i].slice(0, sizeofword)
    if (i < splittedword.length-1){
        result += " "
    }
}

console.log(result)
