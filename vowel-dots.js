let vowels = /(a|e|i|o|u)/i;
function vowelDots(str){
    let string = '';
    for (let i=0; i<str.length;i++){
        if (str[i].match(vowels)){
            string = string + str[i]+'.'
        } else {
            string += str[i]
        }
    }
    return string;
}

// console.log(vowels.test('a'))