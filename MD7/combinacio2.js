// Variables
const nom = Object.freeze({0: "Clara"});
const edat = Object.freeze({0: 25});


// Execució amb comes
console.log("Hola, el meu nom és", nom[0], "i tinc", edat[0], "anys.");


// Execució amb concatenació (+)
console.log("Hola, el meu nom és " + nom[0] + " i tinc " + String(edat[0]) + " anys.");
