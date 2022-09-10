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

/*
let age = 35;
age = 30;
*/
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
/*
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

*/

// Operator precedence
/*
const now = 2040;
const myAge = now - 1998;
const mySarah = now - 2018;

console.log(now - 1998 > now - 2018);

 

let x, y;
x = y =(20 + 10 + 5); // x = y = 35, x =35
console.log(y, x)

const averageAge = (myAge + mySarah) /2
console.log(myAge, mySarah, averageAge);
// just like highschool javascript follows the law of Bodmas 
*/
/*
const firstName = 'jimmy';
const firstJob = 'web developer';
const birthYear = 1999;
const year = 2022;
const jimmy = "Hi " + 'my name is ' + firstName + " I'm, a " + (year - birthYear) + ' years old ' + firstJob + '!';
console.log(jimmy); 

// Template literal backticks
const jimmyNew = `Hi, my name is ${firstName} I'm, a ${year - birthYear} years old ${firstJob}!`;
console.log(jimmyNew);
console.log(`just a normal regular string...`);

// Multiline strings the \n\ code means a new line when writting a paragraph 
console.log('Welcome to \n\
coding school \n\
in moringa campus');

// Template literal backticks \n\ is much easier
console.log(`Welcome to
coding school
in moringa campus`);
*/

// Taking decisions if else statements
/*
const age = 15; 
if(age >= 18){
console.log('jimmy can start driving and have a driving licence 🚗');
}else{
 const yearsLeft = 18 - age;
 console.log(`jimmy is too young to drive wait for another ${yearsLeft} years to come!`);
}
*/
// if else is called a controlled structure when executing decisions in codes
// if else is very important in that way developers like jimmy will have more control over the code when executing decisions
/*
const birthYear = 1999;
let century;
if(birthYear <= 2000){
   century = 20;
}else{
    century = 21;
}
console.log(century)
*/

/*
// type conversion  
const inputYear = '1991';
console.log(Number(inputYear))
console.log(Number(inputYear) + 18);

console.log(Number("jimmy"));
console.log(typeof NaN);

console.log(String(23),23);

// type coercion
console.log('I am ' + 23 + ' Years old')
console.log('10' - '5'- 2);
console.log('10' * '2');
console.log('10' / '2');
console.log('20' >= '2');


let n = '1' + 1; // 11
n = n - 1;
console.log(n);
*/

// 5 falsy values 0 , '', undefined, null, nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jimmy'));
console.log(Boolean({}));