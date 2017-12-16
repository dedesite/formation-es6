"use strict";

function findIndex(a, searchEl) {
  return a.findIndex(el => el === searchEl);
}

function find(a, searchEl) {
  return a.find(el => el === searchEl);
}

function concat(a1, a2) {
  return [...a1, ...a2];
}

function createFrom(a) {
  return Array.from(a);
}

function initialize(defaultValue, times) {
  return new Array(times).fill(defaultValue);
}

function forEach(a, func) {
  for (const [ind, el] of a.entries()) {
    func(el, ind);
  }
}

function filter(a, func) {
  return a.filter(func);
}

function map(a, func) {
  return a.map(func);
}

function reduce(a, func, initialValue) {
  return a.reduce(func, initialValue);
}

function some(a, func) {
  return a.some(func);
}

function every(a, func) {
  return a.every(func);
}
