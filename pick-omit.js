function pick(obj, option) {
    let result = {};
    if (typeof option === 'string') {
        if (obj.hasOwnProperty(option)) {
            result[option] = obj[option];
        }
    } else if (Array.isArray(option)) {
        for (const key of option) {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

function omit(obj, option) {
    let result = {};
    
    if (typeof option === 'string') {
        for (const key in obj) {
            if (key !== option && obj.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
    } else if (Array.isArray(option)) {
        for (const key in obj) {
            if (!option.includes(key) && obj.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
    }
    
    return result;
}

