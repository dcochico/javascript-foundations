function createTape(title) {
  return tape = {
    title: title || '',
    readyToPlay: false
  }
}

function reset(tape) {
  if (!tape.readyToPlay) {
    tape.readyToPlay = !tape.readyToPlay;
  }
  return tape;
}

function createCollection(tapes) {
  var collection = [];
  for (var i = 0; i < tapes.length; i++) {
    collection.push(tapes[i].title);
  }
  if (collection.length < 1) {
    return 'Your collection is empty';
  } else {
    return collection;
  }
}

module.exports = { 
  createTape,
  reset,
  createCollection
 }
