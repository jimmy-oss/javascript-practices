// Pseudocode 
/*
Mark and John are trying to compare their BMI and the formula
BMI = mass / height ** 2 which is equal to mass / (height * height) (mass in kg and height in meter).
*/

// BDD

/*
Your tasks:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula(you can even implement both
   versions)
3. Create a Boolean variable 'mark Higher BMI' containing information about
   whether Mark has a higher BMI than John.
   */
/* Given the following data
 Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/
// DATA 1
// Mark's variable in mass and height.
const marksMass = 78; 
const marksHeight = 1.69;

// John's variable in mass and height.
const johnsMass = 92;
const johnsHeight = 1.95;

// Calculate Mark's BMI given their mass and height
const marksBodyMass = 78 / 1.69 ** 2 ;
console.log(marksBodyMass);

// Calculate John's BMI given their mass and height
const johnsBodyMass = 92 / 1.95 ** 2;
console.log(johnsBodyMass);

// Comparing their BMI is mark BMI higher than John or equal
const markHigherBMI = (marksBodyMass >= johnsBodyMass);
console.log(markHigherBMI);

// Comparing their BMI is John BMI higher than mark or equal
const johnHigherBMI = (johnsBodyMass >= marksBodyMass);
console.log(johnHigherBMI);

// DATA 2
// Mark's variable in mass and height.
const markMass = 95; 
const markHeight = 1.88;

// John's variable in mass and height.
const johnMass = 85;
const johnHeight = 1.76;

// Calculate Mark's BMI given their mass and height
const markBodyMass = 95 / 1.88 ** 2 ;
console.log(markBodyMass);

// Calculate John's BMI given their mass and height
const johnBodyMass = 85 / 1.76 ** 2;
console.log(johnBodyMass);

// Comparing their BMI is mark BMI higher than John or equal
const markBMI = (markBodyMass >= johnBodyMass);
console.log(markBMI);

// Comparing their BMI is John BMI higher than mark or equal
const johnBMI = (johnBodyMass >= markBodyMass);
console.log(johnBMI);