// pseudocode
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// BDD
//Your tasks:
// 1. Calculate the average score for each team,using the test data below
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// Bonus 1 tasks:
//Bonus 1:Include a requirement for a minimum score of 100.With this rule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// Bonus 2 tasks:
// Minimum score also applies to a draw 
// !So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.
// Otherwise, no team wins the trophy
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Dolphins average score
const dolphinsAverageScore = (96 + 108 + 89) / 3
console.log(dolphinsAverageScore);
// total = 97.7

// Kolas average score
const kolasAverageScore = (88 + 91 + 110) / 3
console.log(kolasAverageScore);
// total = 96.3

// Determining which team won with their score

if(dolphinsAverageScore > kolasAverageScore){
  console.log(`The dolphins team won because they have an average score of ${dolphinsAverageScore}
  whereas the kolas team has an average score of ${kolasAverageScore}`)
}else if(dolphinsAverageScore === kolasAverageScore){
  console.log("Both team has the same average score")
}else{
  console.log(`The kolas team has won because they have an average score of ${kolasAverageScore}
  whereas dolphin has an average score of ${dolphinsAverageScore}`)
}

// Data Bonus 1 for dolphins
const dolphinBonusScore = (97 + 112 + 101) / 3
console.log(dolphinBonusScore)
// total = 103.3

// Data Bonus 1 for kolas
const kolasBonusScore = (109 + 95 + 123) / 3
console.log(kolasBonusScore)
// total = 109

// Determining the team which scored above 100 points or below
if(dolphinBonusScore >=100){
  console.log(`The dolphin score is above 100 points`)
}else{
  console.log(`The dolphin team score is below 100 points`)
}if(kolasBonusScore >=100){
  console.log(`The kolas score is above 100 points`)
}else{
  console.log(`The kolas team is below 100 points`)
}
 

// Determining which team has won with the minimum score of 100 or above
  if(kolasBonusScore > dolphinBonusScore){
    console.log(`The kolas team has won the match with 100 points and above!`)
  }else if(kolasBonusScore === dolphinBonusScore){
    console.log(`The kolas team and the dolphin team went for a draw!`)
  }else if(!kolasBonusScore < dolphinBonusScore){
    console.log(`The dolphin team has won the match because the kolas team are below 100 points`)
  }else if(dolphinBonusScore > kolasBonusScore){
    console.log(`The dolphin team has won the match with 100 points and above`)
  }else if(!dolphinBonusScore < kolasBonusScore){
    console.log(`The kolas team has won the match because the dolphin team are below 100 points`)
  }else if(!dolphinBonusScore === !kolasBonusScore){
    console.log(`The dolphin team and kolas team went for a draw both teams are below 100 points`)
  }
 
// Data Bonus 2
// dolphins average score
const dolphinScore = (97 + 112 + 101) / 3
 console.log(dolphinScore)

 // kolas average score
const kolasScore = (109 + 95 + 106) / 3
 console.log(kolasScore)

// Determining the team which scored above 100 points or below
if(dolphinScore >= 100){
  console.log("dolphin team is above 100 points!")
}else{
  console.log("dolphins team is below 100 points")
}
if(kolasScore >= 100){
  console.log("kolas team is above 100 points!")
}else{
  console.log("kolas team is below 100 points")
}

// Determining which team has won with the minimum score of 100 or above
if(dolphinScore > kolasScore){
  console.log(`The dolphin team has won the match with 100 points and above!`)
}else if(dolphinScore === kolasScore){
  console.log(`Both teams has the same points so its a draw!`)
}else if(!dolphinScore < kolasScore){
  console.log(`The kolas team has won because dolphin team is below 100 points!`)
}else if(kolasScore > dolphinScore){
  console.log(`The kolas team has won the match with 100 points and above`)
}else if(!kolasScore < dolphinScore){
  console.log(`The dolphin team has won the match because the kolas team score is below 100 points!`)
}else if(!kolasScore === !dolphinScore){
  console.log(`Both teams has the same points below 100 points so its a draw!`)
}