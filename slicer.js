// function slice(text='helllllo', start=2, end=5){ 
//     // if (typeof text === 'string'){
//         let str = text.split(' ');
//         let result = [];
//         for (let i= start; i < end; i++){
//             result.push(str[i]);
//         }

//         console.log(result.join(' '))
//     // }
// };

function slice(text, start, end=text.length){
    
    let result = [];
    if (end < 0){
        end += text.length
    }

    if (start<0){
        start += text.length
    }

    if (start>=0){
    for (let i = start; i < end; i++) {
        result.push(text[i]);
    }
    } else {
        start *= -1
        for (let i = text.length-start; i < text.length; i++) {
            result.push(text[i]);
        }
    }
        
    if (typeof text === 'string'){

        return result.join('');
    }
    if (Array.isArray(text)){
        return result;
    }

};

// console.log(slice(['Hello','world', 'this', 'is', 'a', 'test'], 1));
// console.log(slice('Hello world this is a test', 1));
// console.log(slice('abcdef', -3, -1))