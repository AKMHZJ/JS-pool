function multiply(a,b){
    let result = 0;
    let bb = Math.abs(b)
    for (let i =0; i < bb; i++){
        result += a;
    }
    return b < 0 ? -result : result
}

function divide(a,b){
    if (b===0) return undefined ;
    let count = 0;
    let sign = 1;

    if (a < 0 && b < 0){
        b = -b
        a = -a
        sign = 1;
    } else if (a < 0){
        a = -a
        sign = -1;
    } else if (b < 0){
        b = -b
        sign = -1
    }

    while(a >= b){
        a -= b;
        count++
    }
    return multiply(sign,count)
};

function modulo(a,b){
    if (b === 0) return NaN;
    return a - multiply(Math.floor(divide(a,b)),b)
}

// console.log(multiply(10,3))
// console.log(divide(-123,-22))
// console.log(modulo(0,10))
