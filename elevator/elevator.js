
function createElevator(building, floor, currentFloor, passengers) {
    var elevator =  {
        building: building,
        floors: floor,
        currentFloor: currentFloor,
        passengers: passengers,
    }
    return elevator;
}

function changeFloors(elevator, newFloor) {
    if (newFloor >= elevator.floors) {
        return `Floor ${newFloor} does not exist!`;
        } else if  (elevator.currentFloor === newFloor) {
        return `You're already on floor ${elevator.currentFloor}!`;
        } else {
        return `Taking you to floor ${newFloor}!`;
        }
}

function dropOffPassenger(elevator, passenger) {
    for (var i = 0; i < elevator.passengers.length; i++) {
        if (elevator.passengers[i] === passenger) {
            elevator.passengers.splice(i,1);
        }
    }
    return elevator.passengers;
}

module.exports = {
    createElevator,
    changeFloors,
    dropOffPassenger
};
