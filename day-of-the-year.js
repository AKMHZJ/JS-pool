function dayOfTheYear(date) {    
    const year = date.getFullYear();
   
    const startOfYear = new Date(year, 0, 1);

    const diffInMilliseconds = date - startOfYear;

    const dayOfYear = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000)) + 1;

    if (dayOfYear < 0){
        return 1;
    }

    return dayOfYear;
}

// console.log(dayOfTheYear(new Date('0001-01-01'))) // 1)
// console.log(dayOfTheYear(new Date('1664-08-09'))) // === 222)
// console.log(dayOfTheYear(new Date('1600-12-31'))) // === 366)
// console.log(dayOfTheYear(new Date('2020-06-22'))) // === 174)
// console.log(dayOfTheYear(new Date('2048-12-08'))) // === 343)
// console.log(dayOfTheYear(new Date('2048-11-08'))) // === 313)