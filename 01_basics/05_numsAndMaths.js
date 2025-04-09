const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8949

console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString());
//toLocaleString comma sparated numbers return krta hai , default us standards use krke
console.log(hundreds.toLocaleString('en-IN'));



//+++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++
console.log(Math);
 
//Math.abs() --> absolute value
//Math.round() --> round of 
//ceiling and floor for round off --> Math.ceil() , Math.floor()
//Math.min() , Math.max(). --. min and max value in an array 

console.log(Math.random()*10);
// gives random values between 0 and 1 


// but this gives a random value , but 
// what if we need those values between a certain range 

// lets say between 10 and 20 
// there is a trick using min max and floor , here involved 

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

 