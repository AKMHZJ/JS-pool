function ionOut(str){
    let reg = /[\w]*[t](?=ion)/g;

    return str.match(reg) || [];
}

// console.log(ionOut(''))