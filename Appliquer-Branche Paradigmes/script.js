/*Etape 1 : créer une fonction parseTrip(trip) qui prend le string et le range dans un dictionnaire.
Ma version :
let tripToParse = "Perdita 8 10 8";
function parseTrip(trip) {
let tripSplitted = trip.split(" "); //transforme le string en array.
  let key = ["nom", "horaire", "duree", "prix"]; // set les keysvalues.
  var obj = {}; // crée un objet
  for (let i = 0; i < key.length; i++) {
    //ajoute les valeurs aux clés dans l'objet.
    obj[key[i]] = tripSplitted[i];
  }
  return obj;
}

Version pour crée une map plutôt qu'un dico.
var map = new Map(); // crée une map
for (var i = 0; i < key.length; i++) {
  map.set(key[i], tripSplitted[i]); //ajoute les valeurs aux clés dans la map.
}
return map;*/

function parseTrip(trip) {
  const array = trip.split(" ");
  const objet = {
    client: array[0],
    start: array[1],
    duration: array[2],
    price: array[3],
  };
  return objet;
}

/*en fléché : const parseTrip = (trip) => {
    const array = trip.split(" ") ;
    const objet = {
    "client" : array[0],
    "start" : array[1],
    "duration" : array[2],
    "price" : array[3]
    }
  return objet 
  }*/

// Etape 2 : faire la même chose pour plusieurs strings dans un tableau.
let tripsToParse = [
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7",
];
/* Ma version :
function parseTrips(trips) {
  let obj = [];
  for (i in trips) {
    let tripsSplitted = trips[i].split(" ");
    obj.push({
      client: tripsSplitted[0],
      start: tripsSplitted[1],
      duration: tripsSplitted[2],
      price: tripsSplitted[3],
    });
  }
  return obj;
}

Autre version : pourquoi ca marche pas ? function parseTrips(trips) {
  for (let i = 0; i < trips.length; i++) {
    let tripsSplitted = trips[i].split(" ");
    console.log(tripsSplitted);
  }
}
parseTrips(tripsToParse);*/

function parseTrips(trips) {
  let result = []; //declarer le tableau vide en amont
  for (let i = 0; i < trips.lenght; i++) {
    //faire une boucle pour parcourir le tableau en parametre.
    result.push(parseTrip(trips[i])); //ajouter chaque i du tableau en param dans mon tableau result.
  }
  return result; //rendre le tableau final result.
}

/*en fléchée : const parseTrips = (trips) => {
  let result = []; //declarer le tableau vide en amont
  for (let i=0;i<trips.lenght;i++) { //faire une boucle pour parcourir le tableau en parametre.
    result.push(parseTrip(trips[i])); //ajouter chaque i du tableau en param dans mon tableau result.
  }
  return result;//rendre le tableau final result.
}*/

//Etape 3 : créer une fonction qui calcule les prix des voyages
function getTripsPrices(tableau) {
  //où tableau est un tableau, normalement ici le resultat de parseTrips qui prend trips en parametre.
  let total = 0;
  for (i in tableau) {
    total += parseInt(tabpoulet[i].price);
  }
  return total;
}
getTripsPrices(parseTrips(trips));
