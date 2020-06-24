var listaCognomi = ["Bianchi", "Rossi", "Monti", "Crozza", "Bisio"];
var cognomeUtente = prompt("Scrivi un cognome");

listaCognomi.push(cognomeUtente);
listaCognomi.sort();

console.log(listaCognomi);

console.log(listaCognomi.indexOf(cognomeUtente) +1);
