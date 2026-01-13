const tuplaAliments = Object.freeze({
    0: "Pernil",
    1: "Formatge",
    2: "Mantega",
    length: 3
});
let index = -1;
for (let i = 0; i < tuplaAliments.length; i++) {
    if (tuplaAliments[i] === "Pernil") {
        index = i;
        break;
    }
}
console.log(index);
