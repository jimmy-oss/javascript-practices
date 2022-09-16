// pseudocode

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// BDD 
// Your tasks:
// 1. Calculate the tip,depending on the bill value.Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

// Test data:
// Data 1: Test for bill values 275, 40 and 430 
// Data 1 test can be used to test each value separate in my challenge i combined all

// Test data:
// 2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”


// Steven tip bill
const tip =  (275 + 40 + 430) / 3
console.log(tip);
// 248.33 inshort its 248

// Using if else operator

let tipBill;
if(tip >= 50  && tip <= 300 ){
 tipBill = (`your tip is around 15% so your tip bill is ${tip * 15/100} `)
}else{
  tipBill = (`your tip is around 20% so your tip bill is ${tip * 20/100} `)      
}
console.log(tipBill);

// using ternary operator!

const stevenBill = tip >= 50  && tip <= 300 ? console.log(`your tip is around 15% so your tip bill is ${tip * 15/100}`) : console.log(`your tip is around 20% so your tip bill is ${tip * 20/100}`);

// printing the string to the console containing the bill value,the tip,and the final value

const steveBill  = console.log(`Steve bill was ${tip} after tipping his bill he got ${tip * 15/100} and total value of his tip and bill is ${tip + 37.25}`)
 


