function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (!func(arr[i])) {
        return false; 
      }
    }
    return true;
}

function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        return true;
      }
    }
    return false;
}

function none(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        return false;
      }
    }
    return true;
}
  