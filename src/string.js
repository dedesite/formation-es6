export function getWelcomeStr(subject) {
  return `Bienvenue dans cette formation sur ${subject}`;
}

export function getMultiplicationStr(a, b) {
  return `Il est possible d'afficher : ${a * b} sans concaténation de chaine`;
}

export function getFunctionStr(name) {
  function returnName(name) {
    return name;
  }
  return `Pareil pour l'appel de fonctions : ${returnName(name)}`;
}

// Il est aussi possible d'utiliser les template literals pour des chaînes
// sur plusieurs lignes qui contiennent des retours à la lignes.
export function getMultiLineStr() {
  return `Ceci est une longue chaîne de caractère avec des 
retours à la ligne
puis d'autres
et encore d'autres`;
}

// Si pas de retour à la ligne, la seule solution est de laisser la concaténation
export function getSingleLineStr() {
  return (
    "Ceci est une longue chaîne de caractère sans" +
    "retours à la ligne " +
    "qui est simplement découpée" +
    "pour plus de lisibilité"
  );
}
