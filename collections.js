function arrToSet(s) {
    const set = new Set(s);
    return set
};

function arrToStr(s) {
    const str = s.join('');
    return str
};

function setToArr(s) {
    const arr = [...s]
    return arr
};

function setToStr(s) {
    const str = [...s].join('')
    return str
};

function strToArr(s) {
    const arr = s.split('')
    return arr
};

function strToSet(s) {
    const set = new Set(s)
    return set
};

function mapToObj(s) {
    const obj = Object.fromEntries(s)
    return obj
};

function objToArr(s) {
    const arr = Object.values(s)
    return arr
};

function objToMap(s) {
    const map = new Map(Object.entries(s))
    return map
};

function arrToObj(s) {
    // const obj = Object.assign({},s)
    const obj = {...s}
    return obj
};

function strToObj(s) {
    const v = strToArr(s)
    const obj = arrToObj(v)
    return obj
};

function superTypeOf(inco){
    if (typeof inco === 'undefined') return 'undefined';
    if (typeof inco === 'boolean') return 'Boolean';
    if (typeof inco === 'number') return 'Number';
    if (typeof inco === 'string') return 'String';
    if (inco === null) return 'null';
    if (typeof inco === 'NaN') return 'Number';
    if (typeof inco === 'function') return 'Function';
    if (Array.isArray(inco)) return 'Array';
    if (inco instanceof Map) return 'Map';
    if (inco instanceof Set) return 'Set';
    return 'Object'
};

// console.log(arrToSet( [ 1, 2, 3, 4, 5 ]));
// console.log(arrToStr( [1, 'ctx', 'ctx', 3]));
// console.log(setToArr( new Set([ 1, 2, 3, 4, 5 ])));
// console.log(setToStr(new Set([ 1, 2, 3, 4, 5 ])));
// console.log(strToArr('12345'));
// console.log(strToSet('12345'));
// console.log(mapToObj(new Map([['hello',1],['hi',2],['hey',3]])));
// console.log(objToArr({a:1,b:2,c:3}));
// console.log(objToMap({a:1,b:2,c:3}));
// console.log((arrToObj([1,2,3,4,5])));
// console.log(strToObj('12345'))

// console.log(superTypeOf(superTypeOf))