function getWelcomeStr(subject) {
  return "Bienvenue dans cette formation sur " + subject;
}

function getMultiplicationStr(a, b) {
  return (
    "Il est possible d'afficher : " + a * b + " sans concaténation de chaine"
  );
}

function getFunctionStr(name) {
  function returnName(name) {
    return name;
  }
  return "Pareil pour l'appel de fonctions : " + returnName(name);
}

// Il est aussi possible d'utiliser les template literals pour des chaînes
// sur plusieurs lignes qui contiennent des retours à la lignes.
function getMultiLineStr() {
  return (
    "Ceci est une longue chaîne de caractère avec des \n" +
    "retours à la ligne\n" +
    "puis d'autres\n" +
    "et encore d'autres"
  );
}

// Si pas de retour à la ligne, la seule solution est de laisser la concaténation
function getSingleLineStr() {
  return (
    "Ceci est une longue chaîne de caractère sans" +
    "retours à la ligne " +
    "qui est simplement découpée" +
    "pour plus de lisibilité"
  );
}
