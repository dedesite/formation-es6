function Animal(name) {
  this._name = name;
}

// Propriété statique
Animal.type = "Animal";
Animal.getFamily = function() {
  return "Animal";
};

Animal.prototype = {
  talk: function() {
    return "Hello";
  }
};
// Pour plus d'info sur cette syntaxe voir :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
Object.defineProperty(Animal.prototype, "name", {
  get: function() {
    return this._name;
  },
  set: function(name) {
    this._name = name;
  }
});

function Cat(name) {
  Animal.call(this, name);
}
Cat.type = "Cat";
Cat.getFamily = function() {
  return "Felidae";
};
// On utilise ici Object.create et pas Object.assign pour récupérer aussi
// les propriétés non énumérables.
// pour plus de détails voir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Description
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
// On peut définir une méthode comme ça
Cat.prototype.talk = function() {
  return "Miaou";
};

function Dog(name) {
  Animal.call(this, name);
}
// Il n'existe pas de méthodes simple pour hériter des propriétés statiques
// d'une classe en ES5
Dog.type = Animal.type;
Dog.getFamily = Animal.getFamily;
Dog.prototype = Object.create(Animal.prototype, {
  // Ou comme ça.
  talk: {
    value: function() {
      return "Waf waf";
    }
  }
});
Dog.prototype.constructor = Dog;
