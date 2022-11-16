//Etape 1 : ecrire une fonction sum1 qui additionne les entiers d'un tableau.
function sum1(array) {
  let resultat = 0;
  for (i = 0; i < array.length; i++) {
    resultat += array[i];
  }
  return resultat;
}

//Etape 2 : même exercice avec une fonction récursive.
function sum2(array) {
  return sum1(array);
}

//Etape 3 : fonction qui calcule la factorielle.
function getTheFactorielle(n) {
  if (n <= 0) {
    return 1;
  }
  return n * getTheFactorielle(n - 1);
}

//Etape 4 : suite de Fibonnacci
function fibonnacci(x) {
  if (x === 1) {
    return 0;
  } else if (x === 2) {
    return 1;
  }
  return fibonnacci(x - 1) + fibonnacci(x - 2);
}

//affichage HTML
function testsum1() {
  let userInput = prompt("Entrez plusieurs chiffres, séparés par des virgules");
  let numberList = userInput.split(",").map(Number);
  return alert(sum1(numberList));
}

function testsum2() {
  let userInput = prompt("Entrez plusieurs chiffres, séparés par des virgules");
  let numberList = userInput.split(",").map(Number);
  return alert(sum2(numberList));
}

function testGetTheFactoriellle() {
  let userInput = parseInt(prompt("Entrez un nombre"));
  return alert(getTheFactorielle(userInput));
}

function testFibonnaci() {
  let userInput = parseInt(prompt("Entrez un nombre"));
  return alert(fibonnacci(userInput));
}
