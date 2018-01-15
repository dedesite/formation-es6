export function findIndex(a, searchEl) {
  return a.findIndex(el => el === searchEl);
}

export function find(a, searchEl) {
  return a.find(el => el === searchEl);
}

export function concat(a1, a2) {
  return [...a1, ...a2];
}

export function createFrom(a) {
  return Array.from(a);
}

export function initialize(defaultValue, times) {
  return new Array(times).fill(defaultValue);
}

export function forEach(a, func) {
  for (const [ind, el] of a.entries()) {
    func(el, ind);
  }
}

export function filter(a, func) {
  return a.filter(func);
}

export function map(a, func) {
  return a.map(func);
}

export function reduce(a, func, initialValue) {
  return a.reduce(func, initialValue);
}

export function some(a, func) {
  return a.some(func);
}

export function every(a, func) {
  return a.every(func);
}
