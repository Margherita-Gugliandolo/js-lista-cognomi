var listaCognomi = ["Bianchi", "Rossi", "Monti", "Crozza", "Bisio"];
var cognomeUtente = prompt("Scrivi un cognome");

listaCognomi.push(cognomeUtente);
//listaCognomi.sort();

for (var i = 0; i < listaCognomi.length - 1 ; i++) {
  console.log(listaCognomi[i].localeCompare(listaCognomi[i+1]));
}

console.log(listaCognomi);

console.log(listaCognomi.indexOf(cognomeUtente) +1);
