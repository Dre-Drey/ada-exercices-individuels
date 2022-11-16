const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": " ",
};

const morseToLatin = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};

//Etape 1 : spliter une phrase caractères majuscules stockés dans un tableau.
function getLatinCharacterList(sentenceToSplit, separator) {
  let sentenceToSplitMaj = sentenceToSplit.toUpperCase();
  return sentenceToSplitMaj.split(separator);
}

console.log(getLatinCharacterList("Hello World", ""));
document.getElementById("split").innerHTML = getLatinCharacterList(
  "Hello, World",
  ""
);

/* Autre possibilité : 
function getLatinCharacterList(str) { 
  return Array.from(str);
} */

//Etape 2 : aller prendre la valeur en morse d'un caractere latin
function translateLatinCharacter(latinCharacter) {
  return (morseCharacter = latinToMorse[latinCharacter]);
}
document.getElementById("morse").innerHTML = translateLatinCharacter("H");

//Etape 3 : transformer une phrase en caract. latins en morse.
function encode(latinTexte) {
  let morsePhrase = "";
  for (i = 0; i < getLatinCharacterList(latinTexte, "").length; i++) {
    morsePhrase +=
      " " + translateLatinCharacter(getLatinCharacterList(latinTexte, "")[i]) "/";
  }
  return morsePhrase;
}

encode("Hello World");
document.getElementById("phrase").innerHTML = encode("Hello World");

//Etape 4 : créer une fonction decode qui transforme du morse en caract. latins.

function getMorseCharacterList(sentenceToSplit, separator) {
  return sentenceToSplit.split(separator);
}
getMorseCharacterList("-- .-", " ");
console.log(getMorseCharacterList("-- .-", " "));

function translateMorseCharacter(morse) {
  return (latinCharacter = morseToLatin[morse]);
}
console.log(translateMorseCharacter("--"));

function decode(morseTexte) {
  let morsePhrase = "";
  for (i = 0; i < getMorseCharacterList(morseTexte, " ").length; i++) {
    morsePhrase +=
      " " + translateMorseCharacter(getMorseCharacterList(morseTexte, " ")[i]);
  }
  return morsePhrase;
}
console.log(decode("-- .-"));
