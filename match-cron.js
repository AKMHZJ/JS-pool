function matchCron(cron, date) {
    const [minute, hour, dayOfMonth, month, dayOfWeek] = cron.split(' ');

    // Extract the relevant parts of the Date object
    const minuteDate = date.getMinutes();
    const hourDate = date.getHours();
    const dayDate = date.getDate();
    const monthDate = date.getMonth() + 1; // Months are 0-based, so add 1
    const dayOfWeekDate = date.getDay(); // 0 = Sunday, 6 = Saturday

    // Helper function to check if a cron part matches the date part
    function match(cronPart, datePart) {
        return cronPart === '*' || Number(cronPart) === datePart;
    }

    // Check if all parts match
    return (
        match(minute, minuteDate) &&
        match(hour, hourDate) &&
        match(dayOfMonth, dayDate) &&
        match(month, monthDate) &&
        match(dayOfWeek, (dayOfWeekDate === 0 ? 7 : dayOfWeekDate)) // Convert Sunday (0) to 7
    );
}

// console.log()