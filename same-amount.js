function sameAmount(str, reg1, reg2){
    let r1 = new RegExp(reg1,"g")
    let r2 = new RegExp(reg2,"g")
    let reg11 = str.match(r1);
    let reg22 = str.match(r2);
   
    if (reg11===null || reg22===null) return false;

    if (reg11.length === reg22.length){
        return true;
    }
    return false
}

// console.log(sameAmount('hello how are hoyou', /he/, /ho/));