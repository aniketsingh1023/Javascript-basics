const name = "Aniket"
const repoCount = "30"

//console.log(name + repoCount + " Value");
// same thing with a litte string interpolation

console.log(`elo my name is ${name} and my repo count is ${repoCount}`);
 // read about methods of strings online
// proto , length ,touppercase

const gameName = new String('Aniket')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf(2));
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);
//allows neagtive values also 

//trip , and replace 

//trim removes whitespace 
 

const newStringOne = "   mai   "
console.log(newStringOne.trim());

// read about replace but generally the idea is to replace a value from a certain text 