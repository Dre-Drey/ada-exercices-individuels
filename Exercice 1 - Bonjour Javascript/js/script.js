PromptedName = prompt("Quel est ton nom?", [""]);
var nom = "Bonjour " + PromptedName;
document.body.innerHTML += nom;

var PromptedAge = prompt("Quel est ton année de naissance?", [""]);
var age = 2022 - PromptedAge;
document.body.innerHTML += age;
