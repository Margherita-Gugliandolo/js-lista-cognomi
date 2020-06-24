var cognomeUtente = prompt("Scrivi un cognome");
var listaCognomi = ["Bianchi", "Rossi", "Monti", "Crozza", "Bisio"];
listaCognomi.push(cognomeUtente);

console.log(listaCognomi);
listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  document.write("<li>" + listaCognomi[i]);
}

console.log(listaCognomi);

console.log(listaCognomi.indexOf(cognomeUtente) +1);
