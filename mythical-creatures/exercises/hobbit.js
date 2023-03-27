function createHobbit(name, age) {
  var hobbit = {
    name: 'unknown',
    age: 0,
    isAdult: null,
    isOld: null,
    acquaintances: []
  }
  if (name !== undefined) {
    hobbit.name = name;
  }
  if (age !== undefined) {
    hobbit.age = age;
  }
  if (hobbit.age >= 33) {
    hobbit.isAdult = true;
  } else {
    hobbit.isAdult = false;
  }
  if (hobbit.age >= 101) {
    hobbit.isOld = true;
  } else {
    hobbit.isOld = false;
  }
  return hobbit;
}

function celebrateBirthday(hobbit) {
  hobbit.age ++;
  if (hobbit.age >= 33) {
    hobbit.isAdult = true;
  } else {
    hobbit.isAdult = false;
  }
  if (hobbit.age >= 101) {
    hobbit.isOld = true;
  } else {
    hobbit.isOld = false;
  }
  return hobbit;
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return "Here is the ring!";
  } else {
    return "You can't have it!";
  }
}

function meetPeople(hobbit, people) {
  for (var i = 0; i < people.length; i++) {
    hobbit.acquaintances.push(people[i]);
  }
  return hobbit;
}

function findFriends(hobbit) {
  var friends = [];
  for (var i = 0; i < hobbit.acquaintances.length; i++) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name);
    }
  }
  return friends;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}