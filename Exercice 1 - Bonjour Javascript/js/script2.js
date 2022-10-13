const name = prompt("comment tu t appele cousine");
const age = parseInt(prompt("t'es née quand?"), 10);

document.body.innerHTML += "<h1> Coucou!" + name + " </h1>";

document.body.innerHTML += "<h2> tu as " + age + " ans </h2>";
