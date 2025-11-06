//console.log("11110010".replace(/1/g, "2"));
//console.log("22220020".replace(/0/g, "1"));
//console.log("22221121".replace(/2/g, "0"));


let a = "11110010";
a = a.replace(/0/g,"1");
a = a.replace(/1/g, "2");
a = a.replace(/2/g, "3");

console.log(a);
