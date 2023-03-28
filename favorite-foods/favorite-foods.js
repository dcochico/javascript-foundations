function createFavoriteFood({dish,ingredients,isSpicy}) {
    var food = {
        name: dish,
        ingredients: ingredients,
        isSpicy: isSpicy,
        timesOrdered: 0
    }
    return food;
} 

function commentOnSpiciness(food) {
    if (food.isSpicy) {
        return `Wow, this ${food.name} is so spicy!`;
    }
    return `Phew, this ${food.name} is not very spicy.`;
}

function orderFood(food) {
    food.timesOrdered ++;
    return food;
}

function createShoppingList(foodList) {
    var emptyList = [];
    for (var i = 0; i < foodList.length; i++) {
        emptyList.push(foodList[i].ingredients);
    }
    var filteredList = [];
    for (var i = 0; i < emptyList.length; i++) {
        var ingredients = emptyList[i].join('+');
        filteredList.push(ingredients);
    }
    var finalList = filteredList.join('+');
    finalList.replaceAll('++','+');
    return finalList.split('+');
}

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};