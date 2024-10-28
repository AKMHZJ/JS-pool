function filter(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function reject(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function partition(array, func){
    return [filter(array, func),reject(array, func)]
}