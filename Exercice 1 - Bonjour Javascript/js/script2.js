const nom = prompt("comment t'appelle-tu");
const age = parseInt(prompt("quelle est ton année de naissance"), 10);

document.body.innerHTML += "<h1> Coucou!" + nom + " </h1>";

document.body.innerHTML += "<h2> tu as " + age + " ans </h2>";
