// IN javascript code is ran line by line 
// it is a interpretted language like python 
// its compiled at runtime 

// upside - there is one less step before running your code
// downside - more prone to runtime errors

let firstName = "John";
console.log(firstName);


const accountId = 14423
let accountEmail = "aniketsinghn10@gmail.com"
var accountPassword = "123"
acountCity = "Jaipur"
let accountState;

// accountId = 12
// not allowed
accountEmail = "ani@ani.com"
accountPassword = "234"
accountCity = "bhopal"
/*
Prefer not to use var
produces issue in bloack scope and fucntional scope
 
*/

console.log(accountId)
console.table([accountEmail,accountPassword,accountCity,accountState])