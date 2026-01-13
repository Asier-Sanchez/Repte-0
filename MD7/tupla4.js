const tupla1 = Object.freeze({
    0: 1, 1: 2, 2: 3, 3: 4, 4: 5,
    5: 6, 6: 5, 7: 7, 8: 8, 9: 9,
    length: 10
});
let comptar = 0;
for (let i = 0; i < tupla1.length; i++) {
    if (tupla1[i] === 3) comptar++;
}
console.log(comptar);
