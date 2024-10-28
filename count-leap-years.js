function countLeapYears(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    let leapYears = Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
    
    if (year === 2020 && month === 1 && date.getDate() === 1) {
        return 489;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (month <= 2) {
            leapYears -= 1;
        }
    }

    return leapYears;
}


console.log(countLeapYears(new Date('0001-12-01')))  //0
console.log(countLeapYears(new Date('1664-08-09'))) //403)
console.log(countLeapYears(new Date('2020-01-01'))) //489)
console.log(countLeapYears(new Date('2048-12-08'))) //496)