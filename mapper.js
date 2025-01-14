function map(arr, func) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(func(arr[i], i, arr));
    }
    return res;
}

function flatMap(arr, func) {
    return arr.reduce((acc, val, i, arr) => acc.concat(func(val, i, arr)),[]);
}