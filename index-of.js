function indexOf(arr, value, current=0){
    
    for (let i = current; i < arr.length;i++){
        if (value === arr[i]) {
            return i
        }
    }
    return -1;
}

const lastIndexOf = (arr, value, current=arr.length) => {
    for (let i = current; i >= 0;i--){
        if (value === arr[i]) {
            return i
        }
    }
    return -1;
}

function includes(arr, value){
    for (let i = 0; i < arr.length;i++){
        if (value === arr[i]){
            return true;
        }
    }
    return false;
}

// console.log(indexOf(['t', 0, 0, 't'], 't', 1))

// console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))

// console.log(includes([1,2,3,4,5,6,7], 9))