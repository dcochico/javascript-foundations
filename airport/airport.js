function createAirport(name, airlines, availableGates) {
  var airport = {
    name: name,
    airlines: airlines,
    availableGates: availableGates
  }
  return airport;
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, planes) {
  if (airport.availableGates >= planes) {
    airport.availableGates -= planes;
    return `Success! Current availability is ${airport.availableGates}.`;
  } else {
    var overflow = planes - airport.availableGates;
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`;
  }
}

function checkAirlineLocations(allAirports, airline) {
  var airlineCarriers = [];
  for (var i = 0; i < allAirports.length; i++) {
    if (allAirports[i].airlines.includes(airline)) {
      airlineCarriers.push(allAirports[i].name)
    }
  }
  return airlineCarriers;
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
