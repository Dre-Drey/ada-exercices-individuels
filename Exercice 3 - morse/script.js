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
};

function getLatinCharacter(sentenceToSplit, separator) {
  var arrayOfCharacters = sentenceToSplit.split(separator);
  console.log(arrayOfCharacters);
  document.getElementById("morse").innerHTML = arrayOfCharacters;
}

let sentence = "Je m'appelle Audrey";
let character = "";

getLatinCharacter(sentence, character);
