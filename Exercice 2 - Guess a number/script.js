let givenNumber = parseInt(prompt("Ecris un nombre"));
let chosenNumber = 22;

function didIWin() {
  if (givenNumber < chosenNumber) {
    alert("Plus grand");
    return false;
  } else if (givenNumber > chosenNumber) {
    alert("Plus petit");
    return false;
  } else if (givenNumber === chosenNumber) {
    alert("Bravo ! Vous avez deviné le nombre !");
    return true;
  } else {
    alert("Oups, il y a eu un problème");
    return false;
  }
}

function gamePlay() {
  didIWin();
  if ((didIWin = true)) {
    alert("Le jeu est fini");
  } else {
    parseInt(prompt("Ecris un nombre"));
  }
}
gamePlay();
