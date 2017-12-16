function findIndex(a, searchEl) {
  var elIndex = -1;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === searchEl) {
      elIndex = i;
      break;
    }
  }
  return elIndex;
}

function find(a, searchEl) {
  var findedEl = undefined;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === searchEl) {
      findedEl = a[i];
      break;
    }
  }
  return findedEl;
}

function concat(a1, a2) {
  var finalArr = [];
  for (var i = 0; i < a1.length; i++) {
    finalArr.push(a1[i]);
  }
  for (var i = 0; i < a2.length; i++) {
    finalArr.push(a2[i]);
  }
  return finalArr;
}

function createFrom(a) {
  var toCreate = [];
  for (var i = 0; i < a.length; i++) {
    toCreate.push(a[i]);
  }
  return toCreate;
}

function initialize(defaultValue, times) {
  var toInitialize = [];
  for (var i = 0; i < times; i++) {
    toInitialize.push(defaultValue);
  }
  return toInitialize;
}

function forEach(a, func) {
  for (var i = 0; i < a.length; i++) {
    func(a[i], i);
  }
}

function filter(a, func) {
  var filteredArr = [];
  for (var i = 0; i < a.length; i++) {
    if (func(a[i])) {
      filteredArr.push(a[i]);
    }
  }
  return filteredArr;
}

function map(a, func) {
  var mappedArr = [];
  for (var i = 0; i < a.length; i++) {
    mappedArr.push(func(a[i]));
  }
  return mappedArr;
}

function reduce(a, func, initialValue) {
  var accumulator = initialValue;
  for (var i = 0; i < a.length; i++) {
    accumulator = func(accumulator, a[i]);
  }
  return accumulator;
}

function some(a, func) {
  for (var i = 0; i < a.length; i++) {
    if (func(a[i])) {
      return true;
    }
  }
  return false;
}

function every(a, func) {
  for (var i = 0; i < a.length; i++) {
    if (!func(a[i])) {
      return false;
    }
  }
  return true;
}
