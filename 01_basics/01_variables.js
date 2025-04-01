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