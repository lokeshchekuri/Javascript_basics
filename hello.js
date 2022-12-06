/*console.log("hello World");
console.log(typeof "hello");
console.log(true);
console.log(typeof true);
console.log(typeof null);
let a = 5;
let b = 6;
if (a > b) {
  console.log("a is greater than b");
} else if (b > a) {
  console.log("b is greater than a");
} else {
  console.log("Both are equal");
}
for(let i=0;i<5;i++){
    console.log("Elements is",i);
    console.log("\n");
}
let sch={
    name:"Alice",
    school:{
        class:5,
        section:"a",
        name:"Dps",
    },
};
console.log(sch);
console.log(sch.name);
console.log(sch.school.name);
let arr=["CBIT",7484849,null];
console.log(arr);
for(let j=0;j<3;j++){
    console.log(arr[j]," ");
}*/
/*function askname(){
    var na=readline("What is your name?");
    console.log("Your name is", na);
}
askname();*/
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I am at CBIT",
    e : "oO",
    T : "U "
}));
let quote=require("inspirational-quotes");
console.log(cowsay.say({
    text : quote.getRandomQuote(),
    e : "oO",
    T : "U "
}));

