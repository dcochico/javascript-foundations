function createBirthday(name,month,day) {
    var birthday = {
        name: name,
        month: month,
        day: day
    }
    return birthday;
}

function celebrateBirthday(birthday) {
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`;
}

function countBirthdays(birthdays, month) {
    var counter = 0;
    for (var i = 0; i < birthdays.length; i++) {
        if (birthdays[i].month === month) {
            counter++;
        }
    }
    return counter;
};

module.exports = {
    createBirthday,
    celebrateBirthday,
    countBirthdays
};