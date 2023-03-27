function createVampire(name, pet) {
  if (pet === undefined) {
    var vampire = {
      name: name,
      pet: 'bat',
      thirsty: true,
      ouncesDrank: 0
    }
    return vampire;
  }
  var vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    return 'No thanks, I am too full.';
  }
}

function drink(vampire) {
  if (vampire.ouncesDrank < 40) {
    vampire.ouncesDrank += 10;
  } else if (vampire.ouncesDrank = 40) {
    vampire.ouncesDrank += 10;
    vampire.thirsty = false;
  } else {
    vampire.thirsty = false;
  }
  return vampire;
}

function inquirePlace(locations, place) {
  if (locations.includes(place)) {
    return `Yes, I have spent some time in ${place}.`;
  } else {
    return `No, I have never been to ${place}.`;
  }
}

function findBatLovers(vampires) {
  var batLovers = [];
  for (var i = 0; i < vampires.length; i++) {
    if (vampires[i].pet === 'bat') {
      batLovers.push(vampires[i].name);
    }
  }
  return batLovers;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}