function createEvent(title,month,day) {
    var event = {
        title: title,
        month: month,
        day: day
    }
    if (day < 1 || day > 31) {
        return `Error: ${day} is not a valid day`;
    } else if (month === 2 && day > 28) {
        return `Error: ${day} is not a valid day`;
    } else if (day === 31) {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            return `Error: ${day} is not a valid day`;
        }
    }
    return event;
}

function createCalendar(owner, events) {
    var calendar = {
        owner: owner,
        events: events
    }
    return calendar;
}

function reportMonthlyEvents(calendar,month) {
    var monthlyEvents = [];
    for (var i = 0; i < calendar.events.length; i++) {
        if (calendar.events[i].month === month) {
            monthlyEvents.push(calendar.events[i]);
        }
    }
    return monthlyEvents;
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
};