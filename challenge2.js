// pseudocode

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 is = to mass / (height * height) (mass in kg and height in meter).

// BDD 
/* Your task 1:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula(you can even implement both
   versions)
3. Create a Boolean variable 'mark Higher BMI' containing information about
   whether Mark has a higher BMI than John.
   */
/*
Test data:
1. Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
2. Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
/*
Your last task:
1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
*/

// Variable for mark
const markWeight = 78;
const markHeight = 1.69;

// Variable for john
const johnWeight = 92;
const johnHeight = 1.95;

// Marks BMI Total
const markBMI = 78 / 1.69 ** 2
console.log(markBMI);
 

// John,s BMI Total
const johnBMI = 92 / 1.95 ** 2
console.log(johnBMI);

// Boolean data without if else for mark's
const marksBodyMass = markBMI >= johnBMI
console.log("mark's BMI is higher than our friend john's BMI");

// Boolean data without if else for john's
const johnBodyMass = johnBMI <= markBMI
console.log("john's BMI is lower than our friend mark's BMI")

// if else statement Boolean Data 1
 if(markBMI >= johnBMI){
   console.log(`Mark's BMI is higher than our friend john because mark's BMI is ${markBMI} while john is ${johnBMI}`);
 }else{
  console.log(`John's BMI is higher than our friend mark because mark's BMI is ${markBMI} while john is ${johnBMI}`);
 }

// Data Test 2
// Marks variable for data 2
const marksWeight = 95;
const marksHeight = 1.88;

// Johns variable for data 2
const johnsWeight = 85;
const johnsHeight = 1.76;

// Marks total BMI
const markBodyMass = 95 / 1.88 ** 2;
console.log(markBodyMass);

// Johns total BMI
const johnsBodyMass = 85 / 1.76 ** 2;
console.log(johnsBodyMass);

// Boolean Variable without if else
const markBoolean = markBodyMass <= johnsBodyMass
console.log("mark's BMI is lower than our friend john");

// Boolean Variable for johns without if else
const johnBoolean = johnsBodyMass >= markBodyMass
console.log("john's BMI is higher than our friend mark");

// if else statement boolean data 2
if (markBodyMass>= johnsBodyMass){
  console.log(`Mark's BMI is higher than our friend john because mark's BMI is ${markBodyMass} while john is ${johnsBodyMass}`);
}else{
  console.log(`John's BMI is higher than our friend mark because mark's BMI is ${markBodyMass} while john's BMI is ${johnsBodyMass}`);
}