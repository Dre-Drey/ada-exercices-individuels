function askName() {
  let PromptedName = prompt("Quel est ton nom?", [""]);
  document.body.innerHTML += "<h2> Bonjour " + PromptedName + "</h2>";
}

function askBirthYear() {
  let today = new Date();
  let promptedAge = parseInt(prompt("Quel est ton année de naissance?"), 10);
  let age = today.getFullYear() - promptedAge;
  document.body.innerHTML += "<h2>Vous avez " + age + " ans</h2>";
}

askName();
askBirthYear();

// Pour calculer avec le mois ou jour :
// fonction Date existe en JS et le retourne selon le format du navigateur.
// new date retourne la date du jour.
// EX : let today = new Date() va stocker la date du jour dans la variable today.
//pour etre sure d'avoir des number, soit parseInt soit faire une table de correspondance.
