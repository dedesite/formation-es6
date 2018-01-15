import { Animal, Cat, Dog } from "../src/class";

describe("Class", function() {
  it("Should create an instance of Animal", function() {
    const animal = new Animal();
    expect(animal instanceof Animal).toBeTruthy();
    expect(typeof Animal).toBe("function");
  });

  it("Animals can talk", function() {
    const animal = new Animal();
    expect(animal.talk()).toBe("Hello");
  });

  it("Animal have a static methods and properties", function() {
    expect(Animal.getFamily()).toBe("Animal");
    expect(Animal.type).toBe("Animal");
  });

  it("Animals have getter and setter on name", function() {
    const douglas = new Animal("Douglas");
    const brendan = new Animal("Brendan");
    expect(douglas.name).toBe("Douglas");
    expect(brendan.name).toBe("Brendan");
    douglas.name = "Crockford";
    expect(douglas.name).toBe("Crockford");
  });

  it("Animals can be subclassed", function() {
    const cat = new Cat("Grominet");
    const dog = new Dog("Droopy");
    expect(cat instanceof Animal).toBeTruthy();
    expect(cat instanceof Cat).toBeTruthy();
    expect(dog instanceof Animal).toBeTruthy();
    expect(dog instanceof Dog).toBeTruthy();

    expect(cat.talk()).toBe("Miaou");
    expect(dog.talk()).toBe("Waf waf");
  });

  it("Static properties and methods can be subclassed or not", function() {
    expect(Cat.type).toBe("Cat");
    expect(Dog.type).toBe("Animal");
    expect(Cat.getFamily()).toBe("Felidae");
    expect(Dog.getFamily()).toBe("Animal");
  });
});
