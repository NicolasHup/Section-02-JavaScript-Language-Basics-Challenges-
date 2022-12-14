/***************************
 * Coding Challenge 1


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
*/

/*********************************************
 * Coding Challenge 2
 
John and Mark both play basketball in different teams. In the last three games,
John's team scored 89, 120 and 103 points, while Mark's team scored 116, 94 and
123 points. 

1. Calculate the average score for each team.
2. Decide which team wins in average (highest average score), and print the win
    to the console. Also include the average score in the output.
3. Then change the scores to show different winers. Don't forget to take into
    account there might be a draw (the same average score).
4. EXTRA: MAry also plays basketball, and her team scored 97, 134 and 105 points.
    like before, log the average winner to the console. Hint: you'll need the &&
    operrator to take the decision. 
5. Like before, change the scores to generate different winners, keeping in mind
    there might a draw.


// 1. Calculating the average score for John's team and for Mark's

var aveScoreJohn = (89 + 120 +103) / 3
console.log(aveScoreJohn)
var aveScoreMark = (116 + 94 + 123) / 3
console.log(aveScoreMark)

// 2. Deciding whose team has won using the averagescore 
if (aveScoreJohn > aveScoreMark) {
    console.log('John\'s team won with an average score of: ' + aveScoreJohn)
} else if (aveScoreMark > aveScoreJohn) {
    console.log('Mark\'s team won with an average score of: ' + aveScoreMark)
} else {
    console.log('It\'s a draw. Both with an average score of: ' + aveScoreJohn)
}

// 3.

aveScoreJohn = (89 + 141 +103) / 3
aveScoreMark = (116 + 94 + 123) / 3

if (aveScoreJohn > aveScoreMark) {
    console.log('John\'s team won with an average score: ' + aveScoreJohn)
} else if (aveScoreMark > aveScoreJohn) {
    console.log('Mark\'s team won with an average score: ' + aveScoreMark)
} else {
    console.log('It\'s a draw. Both with an average score of: ' + aveScoreJohn)
}

// 4. 

var aveScoreMary = (97 + 135 + 103) / 3
console.log(aveScoreMary)

if (aveScoreJohn > aveScoreMark && aveScoreJohn > aveScoreMary) {
    console.log('John\'s team won with an average score: ' + aveScoreJohn)
} else if (aveScoreMark > aveScoreJohn && aveScoreMark > aveScoreMary) {
    console.log('Mark\'s team won with an average score: ' + aveScoreMark)
} else if(aveScoreMary > aveScoreJohn && aveScoreMary > aveScoreMark) {
    console.log('Mary\'s team won with an average score: ' + aveScoreMark)
} else {
    console.log('It\'s a draw. All with an average score of: ' + aveScoreJohn)
}

// 5.
aveScoreJohn = (100 + 141 +103) / 3
console.log(aveScoreJohn)
aveScoreMark = (116 + 194 + 50) / 3
console.log(aveScoreMark)
aveScoreMary = (97 + 190 + 30) / 3
console.log(aveScoreMary)

if (aveScoreJohn > aveScoreMark && aveScoreJohn > aveScoreMary) {
    console.log('John\'s team won with an average score: ' + aveScoreJohn)
} else if (aveScoreMark > aveScoreJohn && aveScoreMark > aveScoreMary) {
    console.log('Mark\'s team won with an average score: ' + aveScoreMark)
} else if(aveScoreMary > aveScoreJohn && aveScoreMary > aveScoreMark) {
    console.log('Mary\'s team won with an average score: ' + aveScoreMark)
} else {
    console.log('It\'s a draw. All with an average score of: ' + aveScoreJohn)
}

//testing the draw condition 

aveScoreJohn = (10 + 10 +10) / 3
console.log(aveScoreJohn)
aveScoreMark = (10 + 10 + 10) / 3
console.log(aveScoreMark)
aveScoreMary = (10 + 10 + 10) / 3
console.log(aveScoreMary)

if (aveScoreJohn > aveScoreMark && aveScoreJohn > aveScoreMary) {
    console.log('John\'s team won with an average score: ' + aveScoreJohn)
} else if (aveScoreMark > aveScoreJohn && aveScoreMark > aveScoreMary) {
    console.log('Mark\'s team won with an average score: ' + aveScoreMark)
} else if(aveScoreMary > aveScoreJohn && aveScoreMary > aveScoreMark) {
    console.log('Mary\'s team won with an average score: ' + aveScoreMark)
} else {
    console.log('It\'s a draw. All with an average score of: ' + aveScoreJohn)
}


*/
/*******************************************************************
 * Coding Challenge 03
 
John and his family went on a holiday and went to three different retuarants.
The bills were $124, $48, and $265.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is
between $50 and $200, and 10% when the is overe $200.

In the end, John would like to have two arrays:
1) Containing all three Tips (one for each bill)
2) Containg all three final paid amounts(bill + tip)

*/

// Sollution 

// Original array bills of the three different restuarants

var bills = [124, 48, 265]


// calculations 

//first bill 
var firstTip = 124 * 15/100


//Second bill

var secondTip = 48 * 20/100


// third bill 
var thirdTip = 265 * 10/100

// 1) Tip Bills

var tipBill = [firstTip, secondTip, thirdTip]

console.log(tipBill)


// 2)

var billTip = [bills[0] + firstTip, bills[1] + secondTip, bills[2] + thirdTip]

console.log(billTip)


























