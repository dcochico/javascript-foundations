function issueCard(name, age) {
    return card = {
        name: name,
        age: age,
        numBooksCheckedOut: 0,
        isChild: age < 12
    }
}

function searchByAuthor(collection, author) {
    var authorCatalog = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].author === author) {
            authorCatalog.push(collection[i]);
        }
    }
    if (authorCatalog.length === 0) {
        return 'No book found for search criteria';
    }
    return authorCatalog;
}

module.exports = {
    issueCard,
    searchByAuthor
};