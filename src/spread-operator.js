function multiply(a, b) {
  a = a !== undefined ? a : 1;
  b = b !== undefined ? b : 1;
  return a * b;
}

function operation(options) {
  options.type = options.type || "add";
  options.a = options.a !== undefined ? options.a : 1;
  options.b = options.b !== undefined ? options.b : 1;
  switch (options.type) {
    case "add":
      return options.a + options.b;
    case "multiply":
      return options.a * options.b;
    default:
      return undefined;
  }
}

function getMax() {
  var values = [];
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (typeof arg === "number") {
      values.push(arg);
    } else if (arg instanceof Array) {
      values = Array.concat(values, arg);
    }
  }
  return Math.max.apply(Math, values);
}

function convertToArray(iterable) {
  var a = [];
  for (const v of iterable) {
    a.push(v);
  }
  return a;
}

function createDate(arr) {
  return new Date(arr[0], arr[1], arr[2], arr[3]);
}

function getDate(arr) {
  return { year: arr[0], month: arr[1], day: arr[2] };
}
