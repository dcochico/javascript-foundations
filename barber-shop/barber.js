function createBarber(name, earnings, haircuts) {
    var barber = {
        name: name,
        earnings: earnings,
        haircuts: haircuts
    }
    if (earnings === undefined) {
        barber.earnings = 0;
    }
    if (haircuts === undefined) {
        barber.haircuts = [];
    }
    return barber;
}

function giveCompliment(haircut) {
    return `This ${haircut.style} looks great!`;
}

function cutHair(barber, style) {
    barber.haircuts.push(style);
    barber.earnings += style.price;
    return barber;
}

function listStyles(barber, hairLength) {
    var lengthStyles = [];
    for (var i = 0; i < barber.haircuts.length; i++) {
        if (barber.haircuts[i].hairLength === hairLength) {
            lengthStyles.push(barber.haircuts[i].style);
        }
    }
    return lengthStyles;
}
module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
};