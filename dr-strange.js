function addWeek(date) {
    const weekDays = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday',
        'secondFriday', 'secondSaturday', 'secondSunday'
        ];
        
    const epoch = new Date('0001-01-01');

    const timeDiff = date.getTime() - epoch.getTime();
    
    const daysSinceEpoch = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    const dayIndex = ((daysSinceEpoch % 14) + 14) % 14;
    
    return weekDays[dayIndex];
}
    
    
    
function timeTravel(obj){
    let date = new Date(obj.date)

    if (obj.hour != undefined){
        date.setHours(obj.hour)
    }

    if (obj.minute != undefined){
        date.setMinutes(obj.minute)
    }

    if (obj.second != undefined){
        date.setSeconds(obj.second)
    }

    return date
}


// console.log(addWeek(new Date('2025-11-18')))

// console.log(addWeek(new Date('0001-01-01'))) // Output: Monday
// console.log(addWeek(new Date('0001-01-02'))) // Output: Tuesday
// console.log(addWeek(new Date('0001-01-07'))) // Output: Sunday
// console.log(addWeek(new Date('0001-01-08'))) // Output: secondMonday
// console.log(addWeek(new Date('0001-01-09'))) // Output: secondTuesday

// timeTravel({ date, hour, minute, second })

// console.log(timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString())

// Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
