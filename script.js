'use strict';
 /*
let hasDriverLicence = false;
const passTest = true;

if(passTest) hasDriverLicence = true;
if(hasDriverLicence)console.log("I can drive a car");

 */
/*
// functions
function logger (){
  console.log("My name is jimmy");
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor (apples, oranges){
  const juice = `juice with ${apples} apples and ${oranges} oranges`
  return juice;

}
 const juiceFruit=fruitProcessor(5,0);
 console.log(juiceFruit);

 const appleJuiceFruit = fruitProcessor(4,2);
 console.log(appleJuiceFruit);
 
*/
// function declarations vs expressions
/*
 function calAge1(birthYear){
   return 2022 - birthYear;
 }
  
  const age1 = calAge1(1999);
  console.log(age1);
  // calculating age using declarations
  function calAge2(yearOfBirth){
    const myBirth = "Your current age is " + (2030 - yearOfBirth);
    return myBirth;
  }
  const myAnswer = calAge2(2000);
  console.log(myAnswer);

  // Declaring function using boolean values

  function driveCar(hasDriverLicence,hasGoodSight){
    if(hasDriverLicence === true && hasGoodSight === true){
     console.log(`jimmy can drive a car`)
    }else{
      console.log(`wait until your ready`)
    }

  }
 const testCar = driveCar(true,false);
 
 // Declaring functions using expressions
 const calAge3 = function (birthYear){
  return 2022 - birthYear;
 }
 const age3 = calAge3(2000);
 console.log(age3);
 */
 /*

// Arrow functions
const calAge4 = birthYear => 2030 - birthYear;
const age4 = calAge4(1999);
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) =>{
  const age = 2030 - birthYear;
  const retirementAge = 65 - age;
  //return retirementAge;
  return `${firstName} retires in ${retirementAge} years`
}
console.log(yearsUntilRetirement(1999,'jimmy'));
console.log(yearsUntilRetirement(2000,'bob'));
 */
/*
// functions calling other functions
function fruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor (apples, oranges){
  const applePieces = fruitPieces(apples);
  const orangePieces = fruitPieces(oranges);
  const juice = `The juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
  return juice;
}
console.log(fruitProcessor(2,4));
 */

// // Functions reviewing
// const calcAge = function(birthYear){
//  return 2030 - birthYear;
// }
 

// const yearsUntilRetirement = function(birthYear, firstName){
//   const age = calcAge(birthYear);
//   const retirementAge = 65 - age;
//   if(retirementAge > 0){
//     console.log(`${firstName} retires in ${retirementAge} years`);
//     return retirementAge
//   }else{
//     console.log(`${firstName} has already retired`);
//     return -1
//   }
// }
// console.log(yearsUntilRetirement(1999,'jimmy'));
// console.log(yearsUntilRetirement(1960,'jonas'));

function passExam(name, score){

  let passUni = 71;
  let passColl = 51;

  if(score >= passUni){
    console.log(name + ' has enrolled to university ' + 'with ' + score + ' points ')
  }else if(score >= passColl){
   console.log(name + ' has enrolled to college ' + ' with ' + score + ' points ')
}else{
  console.log(name + ' has failed')
}

}
// The function passExam is the name of the function 
// passExam(name,score) the name and score are parameters which acts as variables and the
// passExam which i passed the name as jimmy and score as 75 are argumenta

function calScore(theoryQuiz,practicalQuiz){
  let score = theoryQuiz + practicalQuiz;
  return score
}


passExam('jimmy',calScore(60, 40));
passExam('Mary', 54);
passExam('Mike', 10);
 