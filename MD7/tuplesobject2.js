const tupla1 = Object.freeze({
    0: "Ana",
    1: "Raquel",
    2: "Pau",
    length: 3
});
// Intent d’afegir
tupla1[3] = "Berta";  // ❌ Ignorat
// Intent de modificar
tupla1[0] = "Berta";  // ❌ Ignorat
console.log(tupla1);
