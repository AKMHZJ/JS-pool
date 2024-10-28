function isValid(date) {
    if (typeof date === 'number' && !isNaN(date)){
        return true
    }
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return false;
    }
    return true;
}

function isAfter(date1,date2){
    if (typeof date1 === 'number') {
        date1 = new Date(date1);
    }
    if (typeof date2 === 'number') {
        date2 = new Date(date2);
    }

    if (!isValid(date1) || !isValid(date2)){
        return false
    }
    return date1.getTime() > date2.getTime()
}

function isBefore(date1,date2){
    if (typeof date1 === 'number') {
        date1 = new Date(date1);
    }
    if (typeof date2 === 'number') {
        date2 = new Date(date2);
    }

    if (!isValid(date1) || !isValid(date2)){
        return false
    }
    return date1.getTime() < date2.getTime()
}

function isFuture(date){
    if (!isValid(date)){
        return false
    }
    return date.getTime() > new Date().getTime()
}

function isPast(date){
    if (!isValid(date)){
        return false
    }
    return date.getTime() < new Date().getTime()
}


// console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))