function createMeal(type, calorieGoal) {
    var meal = {
        type: type,
        calorieGoal: calorieGoal,
        dishes: []
    }
    return meal;
}

function addDish(meal, dish) {
    if (dish.calories <= meal.calorieGoal) {
        meal.dishes.push(dish);
        meal.calorieGoal -= dish.calories;
    }
    return meal;
}

function calculateCalories(meal) {
    var counter = 0;
    for (var i = 0; i < meal.dishes.length; i++) {
        counter += meal.dishes[i].calories;
    }
    return `${meal.type} has a total of ${counter} calories.`;
}

module.exports = {
    createMeal,
    addDish,
    calculateCalories
}