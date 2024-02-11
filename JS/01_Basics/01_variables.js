const accountId = 142875
let emailId = "akash@microsoft.com"
var pwd = "142536"
accCity = "Hyderabad"
let accState;

// accountId = 2541785 : cannot change the const type variables

emailId = "sree@yahoo.com"
pwd = "852146"
accCity = "Kolkata"

/*
Prefer not to use var as it is being declared globally and it has an issue in block scope and functional scope
*/

console.table([accountId, emailId, pwd, accCity, accState])

// When a variable is not initialized with a value then js takes it as undefined