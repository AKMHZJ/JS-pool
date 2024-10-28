function split(str, option){
    let arr = [];
    let string='';
    if (option === ''){
        for (let i = 0; i<str.length;i++){
            arr.push(str[i])
        }
        return arr
    }
    
    for (let i = 0; i<str.length;i++){
        if (option===str.slice(i,i+option.length)){
            arr.push(string)
            string=''
            i += option.length -1;
        } else {
            string += str[i]
        }
    }
    arr.push(string);
    return arr;
}

function join(arr, option){
    let str = '';
    for (let i = 0; i < arr.length; i++){
        // str = str + arr[i]+option;
        str += arr[i];  
        if (i !== arr.length - 1) {
            str += option;
        }
    }
    return str;
}

// console.log(split('hello - there', ' - '));

// console.log(join(['ee', 'ff', 'g', ''], '8'))