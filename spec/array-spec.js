describe("Array", function() {
  it("Should find index of an existing element", function() {
    const a = ["Axel", "Brendan", "Douglas"];
    expect(findIndex(a, "Brendan")).toBe(1);
    expect(findIndex(a, "Guido")).toBe(-1);
  });

  it("Should find an existing element", function() {
    const a = ["Axel", "Brendan", "Douglas"];
    expect(find(a, "Douglas")).toBe("Douglas");
    expect(find(a, "Bjarn")).toBeUndefined();
  });

  it("Should concat two arrays", function() {
    const a1 = ["Bjarn", "Guido", "Brendan"];
    const a2 = ["Denis", "Yukihiro", "Evan"];

    expect(concat(a1, a2)).toEqual([
      "Bjarn",
      "Guido",
      "Brendan",
      "Denis",
      "Yukihiro",
      "Evan"
    ]);
  });

  it("Should be possible to create an array form another one", function() {
    const a1 = ["Bjarn", "Guido", "Brendan"];
    const a2 = createFrom(a1);
    expect(a2).toEqual(["Bjarn", "Guido", "Brendan"]);
    expect(a1 === a2).toBeFalsy();
  });

  it("Should be possible to initialize an array of aritrary length with specific value", function() {
    const a = initialize("a", 3);
    expect(a).toEqual(["a", "a", "a"]);
  });

  it("Should call a function for each element", function() {
    const foo = {
      bar(i, v) {
        return i;
      }
    };
    spyOn(foo, "bar");
    const a = ["Bjarn", "Guido", "Brendan"];
    forEach(a, foo.bar);
    expect(foo.bar).toHaveBeenCalledTimes(3);
    expect(foo.bar).toHaveBeenCalledWith("Bjarn", 0);
    expect(foo.bar).toHaveBeenCalledWith("Guido", 1);
    expect(foo.bar).toHaveBeenCalledWith("Brendan", 2);
  });

  it("Should filter elements given a function", function() {
    const a = ["Bjarn", "Guido", "Brendan"];
    const f = function(el) {
      return el.startsWith("B");
    };
    const f2 = function(el) {
      return el.startsWith("C");
    };
    expect(filter(a, f)).toEqual(["Bjarn", "Brendan"]);
    expect(filter(a, f2)).toEqual([]);
  });

  it("Should transform elements given a function", function() {
    const a = [{ name: "Axel" }, { name: "Brendan" }, { name: "Douglas" }];
    const f = function(el) {
      return el.name;
    };
    expect(map(a, f)).toEqual(["Axel", "Brendan", "Douglas"]);
  });

  it("Should accumulate elements given a function", function() {
    const a = [2, 4, 8];
    const f = function(total, num) {
      return total * num;
    };
    expect(reduce(a, f, 1)).toBe(64);
  });

  it("Should return true if the array contains at least an element that satisfy a function", function() {
    const a = ["Axel", "Brendan", "Douglas"];
    const f = function(el) {
      return el.startsWith("B");
    };
    const f2 = function(el) {
      return el.startsWith("C");
    };
    expect(some(a, f)).toBeTruthy();
    expect(some(a, f2)).toBeFalsy();
  });

  it("Should return true if all the array elements satisfy a function", function() {
    const a = ["Axel", "Brendan", "Douglas"];
    const f = function(el) {
      return el.startsWith("B");
    };
    const f2 = function(el) {
      return typeof el === "string";
    };
    expect(every(a, f)).toBeFalsy();
    expect(every(a, f2)).toBeTruthy();
  });
});
