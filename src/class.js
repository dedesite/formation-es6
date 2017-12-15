"use strict";

class Animal {
  constructor(name) {
    this._name = name;
  }
  static getFamily() {
    return "Animal";
  }
  talk() {
    return "Hello";
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
}
// Il n'est pas encore possible d'avoir des propriété statiques
// http://exploringjs.com/es6/ch_classes.html#_static-data-properties
Animal.type = "Animal";

class Cat extends Animal {
  static getFamily() {
    return "Felidae";
  }
  talk() {
    return "Miaou";
  }
}
Cat.type = "Cat";

class Dog extends Animal {
  talk() {
    return "Waf waf";
  }
}
