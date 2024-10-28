function triangle(str, number){
    let shape = '';
    for (let i = 0; i < number; i++){
        for (let j = i; j >=0; j--){
        shape += str
        }
        if (i < number - 1) {
            shape += '\n';
        }
    }
    return shape
}

// console.log(triangle('*', 5))