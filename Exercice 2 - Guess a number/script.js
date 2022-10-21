let numberToGuess;

function chosenNumber() {
  numberToGuess = parseInt(
    prompt("Joueur 1 : Choisis un nombre entre 0 et 50")
  );
  while (numberToGuess > 50 || numberToGuess < 0) {
    chosenNumber();
  }
}
chosenNumber();

function didIWin() {
  let givenNumber = parseInt(prompt("Joueur 2 : Devine le nombre"));
  if (givenNumber < numberToGuess) {
    alert("Plus grand");
    return false;
  } else if (givenNumber > numberToGuess) {
    alert("Plus petit");
    return false;
  } else if (givenNumber === numberToGuess) {
    alert("Bravo ! Vous avez deviné le nombre !");
    return true;
  } else {
    alert("Oups, il y a eu un problème");
    return false;
  }
}

function gamePlay() {
  const result = didIWin();
  if (result == true) {
    alert("Le jeu est fini");
  } else {
    gamePlay();
  }
}
gamePlay();
