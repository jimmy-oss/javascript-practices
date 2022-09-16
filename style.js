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

/*
// 5 falsy values 0 , '', undefined, null, nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jimmy'));
console.log(Boolean({}));

const money = 100;
if(money){
   console.log("Don't spend it all")
}else{
   console.log("You should get a job!")
}
let height;
if(height){
   console.log("height is defined")
}else{
   console.log("height is undefined")
}
*/
/*
// Equality operators
const age = '18';
if(age === 18) console.log("you are an adult (strict!)")

if (age == 18) console.log("you are an adult (loose!)")
 // the == operator converts '18' into a number as a result 18 is equal to 18 whereas
 // the === operator is very strict it will only validate is '18' the string equal to 18 the number it will give a false output.
 // for writing clean code its better to avoid == operator due to type conversion and coercion which might bring lots of errors
 // '7' == 7 this will convert '7' into a number which is equal to 7
 // '7' === this will not convert a string into a number for best practices its better to avoid the == operator

const favourite = Number(prompt("What is your favorite number!"))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 7){  
   console.log("cool 7 is your favourite number")
}
else if(favourite === 25){
   console.log("25 is also a cool number")
}
else if(favourite === 9){
   console.log("cool 9 is your favourite number")
}
else{
   console.log("Number is not 7 or 25 or 9")
}
 if(favourite !== 25)console.log("why not 25?")
 // !== is the strict version === while != is the loose version
 */

/*
// Logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; //B
console.log(hasDriversLicense && hasGoodVision);// and operator
console.log(hasDriversLicense || hasGoodVision);// or operator
console.log(!hasDriversLicense);// the not operator

// if(hasDriversLicense && hasGoodVision){
//    console.log("sarah is able to drive");
// }else{
//    console.log("someone else should drive")
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);
if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("sarah is able to drive");
     }else{
       console.log("someone else should drive")
   }
 */
// The switch
// so the switch is used in compalison of the codes and its strict like day === 'tuesday' 
 /*
const day = 'saturday';

 switch(day){
    case 'monday': // day === 'monday'
    console.log("learning fundumentals");
    console.log("join the google meet");
    break;
    case 'tuesday':
    console.log("learn theory videos");
    break;
    case 'wednesday':
    case 'thursday':
    console.log("practicing coding challenges");
    break;
    case 'friday':
    console.log("do more research on coding challenges");
    break;
    case 'saturday':
    case 'sunday':
    console.log("visiting my fellow friend");
    break;
    default:
    console.log("Not a valid day!")
 }
 */

// The switch executing by using else if
/*
 if(day === 'monday'){
  console.log("learning fundumentals");
  console.log("join the google meet");

 }else if(day === 'tuesday'){
   console.log("learn theory videos");

 }else if(day === 'wednesday' ||day ==='thursday'){
   console.log("practicing coding challenges");

 }else if(day === 'friday'){
   console.log("do more research on coding challenges");
   
 }else if(day === 'saturday' || day === 'sunday'){
   console.log("visiting my fellow friend");
 }
 else{
   console.log("Not a valid day!")
 }
 */
 /*
 // Statements and expressions
 // inshort statements are values which are executed but gives a value
 // while expressions are values which are lengthy statements strings which translate our action executed but gives a value

 // statement examples are
 5 + 5;
 1991;
 true && false && !true;

 // expressions examples are
 if(50 > 10){
   const str = "50 is greater than 10"
 }
 */
 // The conditional (ternary) operator
 const age = 23;
 // age >= 18 ? console.log("I love drinking a beer") :
 // console.log("I will drink some water");
 const drink = age >= 18 ? "wine" : "water"
 console.log(drink);

 // using if statement
let drink2;
 if(age >= 23){
   drink2 = 'pilsner'
 }else{
   drink2 = 'water'
 }
 console.log(drink2);

 // using template literal
 console.log(`I love to drink ${age >= 18 ? 'pilsner' : 'water'} `)

// The ternary expression is not a replacement for if else statement ternary can be used to take quick decisions on template literal than the if else statement.
// So thats where the ternary helps
// if we have bigger codes and u require to take decisions based on conditions if else will be executed