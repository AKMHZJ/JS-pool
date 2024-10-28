function repeat(str,n){
    if (n <= 0) return '';
    return str + repeat(str, n - 1);
}

console.log(repeat('hello', 4))