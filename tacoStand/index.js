function createIngredient(name, price) {
    var ingredient = {
        name: name,
        price: price
    }
    if (name === undefined) {
        ingredient.name = 'unknown';
    }
    if (price === undefined) {
        ingredient.price = 0.00;
    }
    return ingredient;
}

function createTaco(name, ingredients) {
    var taco = {
        name: name,
        ingredients: ingredients
    }
    if (name === undefined) {
        taco.name = 'custom'
    }
    if (ingredients === undefined) {
        taco.ingredients = [];
    }
    return taco;
}

function addIngredientToTaco(taco, ingredient) {
    taco.ingredients.push(ingredient);
    return taco;
}

function calculatePrice(taco) {
    var price = 0;
    for (var i = 0; i < taco.ingredients.length; i++) {
        price += taco.ingredients[i].price;
    }
    return price;
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
