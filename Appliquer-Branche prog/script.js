let ingredients = [
  "Pâtes",
  "Oeufs",
  "Sel",
  "Poivre",
  "Lardon",
  "Oignon",
  "Parmesan",
];
let ingredientsLength = ingredients.length;
ingredients.sort();
let liste = "<ol type=I>";
for (let i = 0; i < ingredientsLength; i++) {
  liste += "<li>" + ingredients[i] + "</li>";
}
liste += "</ol>";

document.getElementById("listeIngredients").innerHTML = liste;
