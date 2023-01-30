//ETAPE 1 : CREER UNE FONCTION CREATEDECK QUI CREE UN JEU DE CARTE
const createDeck = () => {
  let orderedDeck = [
    "1♠",
    "2♠",
    "3♠",
    "4♠",
    "5♠",
    "6♠",
    "7♠",
    "8♠",
    "9♠",
    "10♠",
    "J♠",
    "Q♠",
    "K♠",
    "1♣",
    "2♣",
    "3♣",
    "4♣",
    "5♣",
    "6♣",
    "7♣",
    "8♣",
    "9♣",
    "10♣",
    "J♣",
    "Q♣",
    "K♣",
    "1♡",
    "2♡",
    "3♡",
    "4♡",
    "5♡",
    "6♡",
    "7♡",
    "8♡",
    "9♡",
    "10♡",
    "J♡",
    "Q♡",
    "K♡",
    "1♢",
    "2♢",
    "3♢",
    "4♢",
    "5♢",
    "6♢",
    "7♢",
    "8♢",
    "9♢",
    "10♢",
    "J♢",
    "Q♢",
    "K♢",
  ];

  //alogrithme pour shuffle un tableau
  let i = orderedDeck.length;
  while (--i > 0) {
    let randomIndex = Math.floor(Math.random() * (i + 1)); //chiffre random arrondi pour index random
    [orderedDeck[randomIndex], orderedDeck[i]] = [
      orderedDeck[i],
      orderedDeck[randomIndex],
    ]; //permute i et le random index avec destructuring
  }
  return orderedDeck;
};
const deck = createDeck();
console.log(deck);

//ETAPE 2 : DISTRIBUER LES CARTES AVEC PARAM = NBRE DE CARTES
const deal = (numberOfCards) => {
  let playerDeck = [];
  for (let i = 0; i < numberOfCards; i++) {
    playerDeck.push(deck.shift());
  }
  return playerDeck;
};
const player1 = deal(2);
const player2 = deal(2);
console.log({ player1 }, { player2 });

//ETAPE 3 : RETOURNER LE FLOP AVEC LES CARTES BRULEES ET LES CARTES SORTIES
// const flop = () => {
//   let cards = [];
//   let burntCards = [];
//   for (i in deck) {
//     if (i == 0) {
//       burntCards.push(deal(1).toString());
//     } else if (i == 1 || i == 2 || i == 3) {
//       cards.push(deal(1).toString());
//     } else if (i == 4) {
//       burntCards.push(deal(1).toString());
//     } else if (i == 5) {
//       cards.push(deal(1).toString());
//     } else if (i == 6) {
//       burntCards.push(deal(1).toString());
//     } else if (i == 7) {
//       cards.push(deal(1).toString());
//     }
//   }
//   console.log({ burntCards });
//   console.log({ cards });
// };
const flop = () => {
  let tableFlop = [];
  // 1er tour
  deal(1);
  tableFlop = tableFlop.concat(deal(3));
  //   if(demandeaujoueur()){
  //     return tableFlop
  //   }
  // 2 eme tour
  deal(1);
  tableFlop = tableFlop.concat(deal(1));
  // 3eme
  deal(1);
  tableFlop = tableFlop.concat(deal(1));
  return tableFlop;
};

const flopOnTable = flop();

console.log(flopOnTable);
