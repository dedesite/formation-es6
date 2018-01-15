import * as spread from "../src/spread-operator";

describe("Spread/Rest operator and destructuring", function() {
  it("Should be possible to define default params value", function() {
    expect(spread.multiply(2, 2)).toBe(4);
    expect(spread.multiply(2, 3)).toBe(6);
    expect(spread.multiply(2)).toBe(2);
    expect(spread.multiply()).toBe(1);
  });

  it("Should be possible to define default params value for object too", function() {
    expect(spread.operation({ type: "add", a: 2, b: 3 })).toBe(5);
    expect(spread.operation({ type: "multiply", a: 2, b: 3 })).toBe(6);
    expect(spread.operation({ a: 2, b: 3 })).toBe(5);
    expect(spread.operation({ a: 2 })).toBe(3);
    expect(spread.operation({ type: "multiply", a: 2 })).toBe(2);
    expect(spread.operation({ type: "unknown" })).toBeUndefined();
  });

  describe("getMax - return maximum number", function() {
    it("Should  take an array of numbers as parameter", function() {
      expect(spread.getMax([1, 5, 8, 9, 42, 7])).toBe(42);
    });

    it("Should take an unlimited number of parameters", function() {
      expect(spread.getMax(1, 5, 8, 9, 42, 7)).toBe(42);
    });

    it("Should also handle mixed array and simple values", function() {
      expect(spread.getMax(1, 5, 8, [64, 12, 3], 9, 42, 7)).toBe(64);
    });
  });

  it("Should convert any iterable into Array", function() {
    const obj = {
      *[Symbol.iterator]() {
        yield "Evan";
        yield "Denis";
        yield "Bjarn";
      }
    };
    const str = "Brendan";
    expect(spread.convertToArray(obj)).toEqual(["Evan", "Denis", "Bjarn"]);
    expect(spread.convertToArray(str)).toEqual([
      "B",
      "r",
      "e",
      "n",
      "d",
      "a",
      "n"
    ]);
  });

  it("Should create a Date object form an Array", function() {
    const d = spread.createDate(["2017", "11", "16", "10"]);
    expect(d.getFullYear()).toBe(2017);
    expect(d.getMonth()).toBe(11);
    expect(d.getDate()).toBe(16);
  });

  it("Should return an object representing a simple date", function() {
    const d = spread.getDate(["2017", "11", "16"]);
    expect(d.year).toBe("2017");
    expect(d.month).toBe("11");
    expect(d.day).toBe("16");
  });
});
