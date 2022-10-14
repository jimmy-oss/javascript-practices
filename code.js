'use strict';
// Lecture - Coding Task 1

/*

*************************CODING TASK No 1*********************************

1. Create variables to represent scores of exams for John and Nick and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log 
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result 
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console 
   as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. John passed and Nick failed; c. Nick passed and 
  John failed; d. both students failed).
*/

// SOLUTION:

// Variables for john & nick

let johnExamScores = 80;
let nickExamScores = 45;
let lowerPassingExam = 51;

// condition statement for if else

if(johnExamScores >= lowerPassingExam){
   console.log("john has passed the examination")
}else{
   console.log("john has failed the examination")
}
if(nickExamScores >= lowerPassingExam){
   console.log("nick has passed the examination")
}else{
   console.log("nick has failed the examination")
}

// else if statements check if one of the students has passed an exam which is john
if(johnExamScores >= lowerPassingExam){
   console.log("john has passed the examination")
}else if(johnExamScores <= lowerPassingExam){
   console.log("john has failed the examination")
}else if(nickExamScores >= lowerPassingExam){
 console.log("nick has passed the examination")
}else{
   console.log("nick has failed the examination")
}

//  Use else statement in order to display in console that both students have failed;

const johnExam = 40;
const nickExam = 30;
const passingExam = 51;

if(johnExam >= passingExam && nickExam >= passingExam){
   console.log("both john and nick has passed the exam")
}else{
   console.log("both john and nick has failed the examination")
}

// Variables for john & nick

let johnExamTest = 80;
let nickExamTest = 45;
let examFinalGrade = 51;

// condition statement for if else

if(johnExamScores >= lowerPassingExam){
   console.log(`john has passed the examination because john has ${johnExamScores} points in the test`)
}else{
   console.log("john has failed the examination")
}
if(nickExamScores >= lowerPassingExam){
   console.log("nick has passed the examination")
}else{
   console.log("nick has failed the examination")
}

// Test all the possible cases both students passed;Nick passed and John failed;

const nickGradesTest = 80;
const johnGradesTest = 90;
const passingGradeTest = 50;

if(nickGradesTest >= passingGradeTest && johnGradesTest >= passingGradeTest){
   console.log("Both nick and john has passed the examination")
}else{
   console.log("Both nick and john has failed the examination")
}
// Nick passed and John failed;

const nickGrades = 80;
const johnGrades = 40;
const finalGrades = 50;

// condition statement for if else

if(johnGrades >= finalGrades){
   console.log("john has passed the examination")
}else{
   console.log("john has failed the examination")
}
if(nickGrades >= finalGrades){
   console.log("nick has passed the examination")
}else{
   console.log("nick has failed the examination")
}
