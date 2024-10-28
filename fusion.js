function fusion(obj1, obj2) {
    const result = {};

    for (const key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            const val1 = obj1[key];
            const val2 = obj2[key];

            if (Array.isArray(val1) && Array.isArray(val2)) {
                result[key] = [...val1, ...val2];
            } else if (typeof val1 === 'string' && typeof val2 === 'string') {
                result[key] = val1 + ' ' + val2;
            } else if (typeof val1 === 'number' && typeof val2 === 'number') {
                result[key] = val1 + val2;
            } else if (typeof val1 === 'object' && typeof val2 === 'object' && !Array.isArray(val1) && !Array.isArray(val2)) {
                result[key] = fusion(val1, val2);
            } else {
                result[key] = val2;
            }
        } else {
            result[key] = obj1[key];
        }
    }

    for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }

    return result;
}
