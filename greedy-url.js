function getURL(str){
    let reg = /https?:\/\/\w+(\.|\/|\?|=|\#|\@|\&|-|[0-9]|\[|\]|\%|\,|\w)+(?!=\s)/g;

    return str.match(reg);
}

function greedyQuery(str) {
    let reg = /https?:\/\/\w+(\.|\/|\?|=|\#|\@|\&|-|[0-9]|\[|\]|\%|\,|\w)+(?!=\s)/g;
    let matchedUrls = str.match(reg);

    if (!matchedUrls) return [];

    return matchedUrls.filter(url => {
        let paramCount = (url.match(/(\?|&)[^=]+=[^&]+/g) || []).length;
        return paramCount >= 3;
    });
}

function notSoGreedy(str) {
    let reg = /https?:\/\/\w+(\.|\/|\?|=|\#|\@|\&|-|[0-9]|\[|\]|\%|\,|\w)+(?!=\s)/g;
    let matchedUrls = str.match(reg);

    if (!matchedUrls) return []; 

    return matchedUrls.filter(url => {
        let paramCount = (url.match(/(\?|&)[^=]+=[^&]+/g) || []).length;
        return paramCount >= 2 && paramCount <= 3;
    });
}

// console.log(getURL('qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you'))

// console.log(greedyQuery('qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you'))

// console.log(notSoGreedy('qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you'))

