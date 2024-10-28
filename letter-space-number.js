function letterSpaceNumber(str){
    // let re = /\w \d(?=\W)/g
    let re =/[a-z] [0-9](?=\W|$)/g
    let reg = str.match(re)
    if (reg === null) return [];
    return reg;
}

// console.log(letterSpaceNumber('He is 8 or 9, years old, not 1'))