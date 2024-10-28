function invert(obj) {
    const invertedObj = {};
    for (let key of Object.keys(obj)) {
        invertedObj[obj[key]] = key;
    }

    return invertedObj;
}




// console.log(invert(obj = {
//     hello: 'a',
//     hi: 'b'
// }))