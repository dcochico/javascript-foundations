function createMeal(name, specialRequests, tableNumber) {
    return meal = {
        name: name,
        specialRequests: specialRequests,
        tableNumber: tableNumber,
        complete: false
    }
}

function getMade(meal) {
    meal.complete = true;
    return meal;
}

function announceMeal(meal) {
    if (meal.complete) {
        return `Order up - ${meal.name} for table ${meal.tableNumber}!`;
    } else {
        return `This ${meal.name} is not completed yet`
    }
}

function createOrder(tableOrders) {
    return order = {
        tableNumber: tableOrders.tableNumber,
        meals: tableOrders.meals,
        completedMeals: []
    }
}

function cookMeal(order, meal) {
    if (order.tableNumber === meal.tableNumber) {
        order.completedMeals.push(meal.name);
    }
    return order;
}

function listOrders(order) {
    var orderNames = [];
    for (var i = 0; i < order.meals.length; i++) {
        orderNames.push(order.meals[i].name)
    }
    return orderNames;
}

module.exports = {
    createMeal,
    getMade,
    createOrder,
    cookMeal,
    listOrders,
    announceMeal
};
