function isFriday(date){
    return date instanceof Date && date.getDay() === 5;
}

function isWeekend(date){
    return date instanceof Date && date.getDay() === 6;
}

function isLeapYear(date){
    const year = date.getFullYear();

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

function isLastDayOfMonth(date) {
    let year = date.getFullYear();
    let month = date.getMonth();

    let nextMonth = new Date(year, month + 1, 1);

    let lastDayOfMonth = new Date(nextMonth - 1).getDate();

    let currentDay = date.getDate();

    return currentDay === lastDayOfMonth;
}

// console.log(isLeapYear(new Date('1804-02-01')))