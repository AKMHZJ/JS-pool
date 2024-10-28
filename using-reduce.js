function adder(arr, n=0){
    return arr.reduce((sum, num) => sum + num, n);
}

function sumOrMul(arr, n=0) {
    return arr.reduce((acc, num) => {
      if (num % 2 === 0) {
        return acc * num;
      } else {
        return acc + num;
      }
    }, n);
}

function funcExec(functions, n) {
    return functions.reduce(function(result, func) {
      return func(result);
    }, n);
}

// console.log(adder([1, 2, 3, 4], 10))
// const fArr1 = [
//     (x) => x + 2,
//     (x) => x ** 2,
//     (x) => x - 7,
//     (x) => `result: [${x}]`,
//   ]