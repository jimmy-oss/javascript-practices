// let js = 'amazing';
// console.log(40+20+10-5);

/* let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

javascriptIsFun = "true";
console.log(typeof javascriptIsFun);

let isFun;
console.log(isFun);

isFun = 1992;
console.log(typeof isFun);

*/
// Var, Const and Let declarations

let age = 35;
age = 30;
// is best used while mutating data.

// Const is used in variables that are not supposed to change in the future.
/* const myBirth = 1993;
   myBirth = 1990;
*/
// In const there is an error becoz of the assigned variable
// Inshort const creates a variable which we cannot reassign its immutable a variable
// that cannot be mutated.
// For good practise const and let are nice in writting clean codes.

// This is a math operator
const now = 2040;
const myAge = now - 1998;
const mySarah = now - 2018;
console.log(myAge, mySarah);

console.log(myAge * 2, mySarah / 10, 2 ** 3)
// 2 * 3 meams 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jimmy';
const lastName = 'Jammie';
console.log(firstName + ' ' + lastName)
// + operator is used for concatenating two strings into one inorder to add spaces in btw u add " "

// This are assignment operators
let x = 20 + 10 + 5;
x += 20;// means (x = x + 20) which is = 55
x *= 4; // means (x = x * 4) which is = 220
x++; // means (x = x + 1) which is 221
x--; // means (x = x -1) which is 220
console.log(x) // 35
// Inshort let variable is able to mutate once the x operators is changed time by time into single scope unlike const there will be a naughty error.

// Comparison operators gives a boolean output
// its obvious sarah is 22 which means when comparing with greater than or less than in the console u will get a boolean output
console.log(myAge > mySarah); // > , < , >=, <=
console.log(mySarah >= 22) // >= means is sarah greater than 22 or equal to 22
console.log(mySarah <= 35) // <= means is sarah less than or equal to 22

const isFullAge = mySarah >= 29;
console.log(isFullAge);
console.log(now - 1998 > now - 2018);
// now represents our current year which is 2040 and the logic is, is myAge greater than sarahs age true or false in the current year