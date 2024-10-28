function cutFirst(str){
    if (str.length<=2) return '';
    let result = '';
    for (let i=2; i<str.length; i++){
        result+=str[i];
    }
    return result;
};

function cutLast(str){
    if (str.length<=2) return '';
    let result = '';
    for (let i=0; i<str.length-2; i++){
        result+=str[i];
    }
    return result;
};

function cutFirstLast(str){
    if (str.length<=2) return '';
    let result = '';
        for (let i=2; i<str.length-2; i++){
        result+=str[i];
    }
    return result;
};

function keepFirst(str){
    if (str.length<=2) return str;
    let result = '';
    for (let i=0; i<2; i++){
        result+=str[i];
    }
    return result;
};

function keepLast(str){
    if (str.length<=2) return str;
    let result = '';
    for (let i=str.length-2; i<str.length; i++){
        result+=str[i];
    }
    return result;
};

function keepFirstLast(str){
    if (str.length<=4) return str;
    return keepFirst(str)+ keepLast(str)
};

// console.log(cutFirst('he'))