function reverse(str){
    let result= [];
    for (let i=str.length-1; i>=0; i--){    
        result.push(str[i])
    }
    if (typeof str === 'string'){
        return result.join('');
    }
    if (Array.isArray(str)){
        return result;
    }
}

// console.log(reverse(['hello', 'there']))

// console.log(reverse('hello there'))