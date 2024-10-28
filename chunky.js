function chunk(arr, number) {
    let result = [];

    for (let i = 0; i < arr.length; i += number) {
        result.push(arr.slice(i, i + number));
    }

    return result;
}

// console.log(chunk([1, 2, 3, 4, 5], 2))