let givenNumber = parseInt(prompt("Ecris un nombre"));
function didIWin(givenNumber) {
  if (givenNumber < 22) {
    alert("Plus grand");
  } else if (givenNumber > 22) {
    alert("Plus petit");
  } else if (givenNumber === 22) {
    alert("Bravo ! Vous avez deviné le nombre !");
  } else {
    alert("Oups, il y a eu un problème");
  }
}
didIWin(givenNumber);
