// Coding Step 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let first = ages [0];
let last = ages[ages.length - 1];
console.log("The difference from the first and last element of the array is " + (last - first));

ages.push(11);
let newfirst = ages [0];
let newlast = ages[ages.length - 1];
console.log("The difference from the first and last element of the array is " + (newlast - newfirst));

let sum = 0;
for  (let i = 0; i < ages.length; i++) {
    sum += parseInt(ages[i]);
}
let avg = sum/ages.length;
console.log("The average of all the elements in the array is " + avg);

// Coding Step 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let sumNew = 0;
for (let i = 0; i < names.length; i++) {
    sumNew = sumNew + names[i].length;
}
console.log("The average number of letters per name in the array is " + sumNew/names.length);

let concatenate = names[0];
for (let i = 0; i < names.length; i++) { 
    concatenate = concatenate.concat(' ',names[i]);
}
console.log("The concatenated names: " + concatenate);
// Coding Step 3 - How do you access the last element of any array? ANSWER: array[array.length - 1]

// Coding Step 4 - How do you access the first element of any array? ANSWER: array[0]

// Coding Step 5 
// Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}

// Coding Step 6
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console. 
let sum2 = 0;
for (let i=0; i<nameLengths.length; i++) {
    sum2 += nameLengths[i];
}
console.log('The sum of all the elements in the nameLenghts array is '+ sum2);

// Coding Step 7
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
// i.e. if I pass in ‘Hello’ and 3, I expect the function to return ‘HelloHelloHello’ 

function concatenatedWord (word, n) {
    let con = word;
    for (let i = 1; i <= n; i++)  {
        con = con.concat(word);
    }
        return con;
}
console.log(concatenatedWord('Hello', 3));

// Coding Step 8
// Write a function that takes two parameters, firstName and lastName, and returns a full name
// The full name should be the first and the last name separated by a space

function fullName (firstName, lastName) {
    return fullName = firstName.concat(' ',lastName);
}
console.log("Full name: " + fullName('Aldin', 'Batocabe'));

// Coding Step 9
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
function sumArray(numArray) {
    let sumAdd =0;
    for (let i = 0; i < numArray.length; i++) {
        let addIndex = numArray[i];
        sumAdd += addIndex
    } if (sumAdd > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(sumArray([11, 36, 22]));

// Coding Step 10
// Write a function that takes an array of numbers and returns the average of all the elements in the array. 
function arrayAverage(arrayOfNumbers) {
    let arraySum =0;
    for (let i = 0; i <arrayOfNumbers.length; i++) {
        arraySum += arrayOfNumbers[i];
    } return (arraySum/arrayOfNumbers.length);
}
console.log("The average of all elements in the array is " + arrayAverage([1,2,3,4,10]));

// Coding Step 11
// Write a function that takes two arrays of numbers and returns true if the average of the elements 
// in the first array is greater than the average of the elements in the second array. 
function combinedArrays (array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array1.length; i++) {
        sum1 = sum1 + array1[i];
    }
    let avg1 = sum1/array1.length;

    for (let i = 0; i <array2.length; i++) {
        sum2 = sum2 + array2[i];
    }
    let avg2 = sum2/array2.length;

    if (avg1 > avg2) {
        return true;
    } else {
        return false;
    }
}
console.log( combinedArrays( ([2,5,1,11]), ([1,2,3,6]) ) );

// Coding Step 12
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50. 
function willBuyDrink (isHotOutside, moneyInPocket) {
    if ( (isHotOutside == 'yes') && (moneyInPocket > 10.50) ){
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink('yes', 8));

// Coding Step 13
// Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it. 
function ofAge(age) {
    if (age>=21) {
        return ("You can drink beer");
    } else {
        return ("No beer for you");
    }
}
console.log(ofAge(19));
// I created this simple function to determine by age who can be allowed to have alcohol 
