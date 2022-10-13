function askName() {
  PromptedName = prompt("Quel est ton nom?", [""]);
  var nom = "Bonjour " + PromptedName;
  document.getElementById("nom").innerHTML += nom;
}

function askBirthYear() {
  var PromptedAge = prompt("Quel est ton année de naissance?", [""]);
  var age = 2022 - PromptedAge;
  document.getElementById("age").innerHTML += "Vous avez " + age + " ans";
}

askName();
askBirthYear();
