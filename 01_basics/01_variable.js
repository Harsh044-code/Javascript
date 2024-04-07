const accountId = 11231
let accountEmail ="harshraj2906@gmail.com" // two types to declare variable var and const
var accountPassword = "12342" // var is not binding with scope which creates a problem therefore in mordern code 
accountCity = "Jaipur" // we can declare a variable like this also but not a good method
let accountState;

// accountId = 2 // can't be done as const cannot be changed

/*  
Prefer  not to use var because of issue in block 
scope and functional scope
*/ 

console.log(accountId);

accountEmail = "harsh@223.com"
accountPasswor= "112121212"
accountCity="Ranchi"

console.table([accountId,accountEmail,accountPassword,accountCity])
console.log(accountState);  //undefined