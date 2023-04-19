function createItemStock(name, quantity, price) {
    var item = {
        name: name,
        quantity: quantity,
        price: price
    }
    if (name === undefined) {
        item.name = 'unknown'
    }
    if (quantity === undefined) {
        item.quantity = 0
    }
    if (price === undefined) {
        item.price = 1.00
    }
    return item;
}

function makePurchase(selectedItem, moneyForPurchase) {
    if (moneyForPurchase < selectedItem.price) {
        return `Sorry, you need at least $${selectedItem.price} to make that purchase`;
    }
    if (selectedItem.quantity === 0) {
        return `Sorry, there are none left`;
    }
    return `Here are your ${selectedItem.name}`;
}

function collectChange(looseChange) {
    var expectedTotal = 0;
    for (var i = 0; i < looseChange.length; i++) {
        expectedTotal += looseChange[i];
    }
    return expectedTotal;
}

module.exports = {
    createItemStock,
    collectChange,
    makePurchase
}
