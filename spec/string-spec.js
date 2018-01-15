import * as str from "../src/string";

describe("String", function() {
  it("Should return a welcome string", function() {
    const welcome = "Bienvenue dans cette formation sur Javascript avancé";
    expect(str.getWelcomeStr("Javascript avancé")).toBe(welcome);
  });

  it("Should return a string which multiply number", function() {
    const multiply =
      "Il est possible d'afficher : 12 sans concaténation de chaine";
    expect(str.getMultiplicationStr(3, 4)).toBe(multiply);
  });

  it("Should return a string with the param", function() {
    const s = "Pareil pour l'appel de fonctions : Brendan";
    expect(str.getFunctionStr("Brendan")).toBe(s);
  });

  it("Should return a multiline string", function() {
    const multiLineStr =
      "Ceci est une longue chaîne de caractère avec des \n" +
      "retours à la ligne\n" +
      "puis d'autres\n" +
      "et encore d'autres";
    expect(str.getMultiLineStr()).toBe(multiLineStr);
  });

  it("Should return a long string on a single line", function() {
    const singleLineStr =
      "Ceci est une longue chaîne de caractère sans" +
      "retours à la ligne " +
      "qui est simplement découpée" +
      "pour plus de lisibilité";
    expect(str.getSingleLineStr()).toBe(singleLineStr);
  });
});
