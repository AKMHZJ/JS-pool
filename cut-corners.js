function method(nbr) {
    while (nbr >= 1) {
        let power = 1;
        while (power * 10 <= nbr) {
            power *= 10;
        }
        nbr -= power;
    }
    return nbr;
}



function round(number){
    let result;

    if (number<0){
        number*= -1
        result = method(number)
        return result < 0.5 ? (number-result)*-1 : ((number-result) + 1)*-1;
    } else {
        result = method(number)
    return result < 0.5 ? (number-result) : (number-result) + 1;
}}



function ceil(number){
    let result;

    if (number===0) return 0;
    if (number<0){
        number*= -1
        result = method(number);
        return (number-result)* -1;
    } else {
        result = method(number)
        return (number-result)+1;
    }
}



function floor(number){
    let result;

    if (number<0){
        number*= -1
        result = method(number);
        return ((number-result)+1)* -1;
    } else {
        result = method(number)
        return (number-result);
    }
}



function trunc(number){
    let result;

    if (number < 0){
        number *= -1;
        result = method(number);
        return (number-result)*-1;
    } else {
        result = method(number);
        return (number-result);
    }
}

// console.log(round(-3.1))

// console.log(trunc(-3.1))

// console.log(Math.floor(-3.1))

// console.log(trunc(-3.1))

// console.log(ceil(-3.1))

// const nums = [3.7, -3.7, 3.1, -3.1, 0]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))

// 3.7, -3.7, 3.1, -3.1
// [ 4, -4, 3, -3, 0 ]
// [ 3, -4, 3, -4, 0 ]
// [ 3, -3, 3, -3, 0 ]
// [ 4, -3, 4, -3, 0 ]