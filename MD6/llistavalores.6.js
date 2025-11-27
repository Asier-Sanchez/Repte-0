// Variables
let arbres = ["taronjer", "perera", "pomera", ["ametller", "garrofer"]];
// Execució
if (Array.isArray(arbres[3])) {
	console.log(arbres[3][1]);
} else {
	console.log("No es un array");
}
