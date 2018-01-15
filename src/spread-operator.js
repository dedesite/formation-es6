export function multiply(a = 1, b = 1) {
  return a * b;
}

export function operation({ type = "add", a = 1, b = 1 }) {
  switch (type) {
    case "add":
      return a + b;
    case "multiply":
      return a * b;
    default:
      return undefined;
  }
}

export function getMax(...args) {
  let values = [];
  for (const arg of args) {
    if (typeof arg === "number") {
      values.push(arg);
    } else if (arg instanceof Array) {
      values = [...values, ...arg];
    }
  }
  return Math.max(...values);
}

export function convertToArray(iterable) {
  return [...iterable];
}

export function createDate(arr) {
  return new Date(...arr);
}

export function getDate([year, month, day]) {
  return { year, month, day };
}
