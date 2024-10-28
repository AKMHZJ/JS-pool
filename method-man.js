const words = (str) => {
    return str.split(" ");
};

const sentence = (str) => {
    return str.join(" ");
};

const yell = (str) => {
    return str.toUpperCase();
};

const whisper = (str) => {
    return '*' + str.toLowerCase() + '*';
};

const capitalize = (str) => {
    let arr = str.toLowerCase()

    let capital = arr.charAt(0).toUpperCase() + arr.slice(1);
    return capital;
};

console.log(capitalize('zap ZAP Zap zap'))