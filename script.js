/***************************
 * Coding Challenge 1
 */

/*
Matrk and John are trying to compare their BIM(Body Mass Index),
which is calculated using the formula: BMI = mass/height^2 = 
mass / (height * height). (mass in kg and height )
*/

/*
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMI
3. Calculate a boolean variable containing information 
about whether Mark has a BMI higher than John.
4. Print a string to the console containing the variable from 
step 3. (Something like "is Mark's BMI higher than John's? true")
*/

// 1.
// Declearing variables
var markHeight, johnHeight, markMass, johnMass
markHeight = 1.7
johnHeight = 1.5
markMass = 60
johnMass = 55

// 2.
// Calculating the BMI (BMI = mass/height^2 = mass / (height * height). (mass in kg and height ))

var bmiMark = markMass / (markHeight * markHeight)//bmi for Mark
console.log(bmiMark)
var bmiJohn = johnMass / (johnHeight * johnHeight)//bmi for John
console.log(bmiJohn)

//3.

var isMark = bmiMark > bmiJohn
console.log(isMark)

// 4.

console.log('Is Mark\'s BMI higher than John\'s? ' + isMark)