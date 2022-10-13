function askName() {
  PromptedName = prompt("Quel est ton nom?", [""]);
  let nom = "Bonjour " + PromptedName;
  document.getElementById("nom").innerHTML += nom;
}

function askBirthYear() {
  let PromptedAge = prompt("Quel est ton année de naissance?", [""]);
  let age = 2022 - PromptedAge;
  document.getElementById("age").innerHTML += "Vous avez " + age + " ans";
}

askName();
askBirthYear();
