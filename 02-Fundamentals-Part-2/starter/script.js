// 'use strict';

// to enable
// to avoid making a developer
// so that javascript will not fail silently and to forbid us from doing certain things

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) {
    console.log(` I can drive :D`);

}

//if the variable 'hasDriversLicense' is mispelled , js will not complain -- but when 'use strict' mode is activated it gives the error
//const interface = 543;

// -- functions

// function logger() {

//     console.log('My name is twiggy');
// }



// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;

//     return juice;


// }

// fruitProcessor(5, 6);

// //to save the values returned in a variable
// const appleJuice = fruitProcessor(26, 9);
// console.log(appleJuice);

// // DRY code
// // Don't Repeat Yourself


// //function declaration
// function calcAge(birthYear) {
//     return 2022 - birthYear;
// }


// //function expression

// const calculateAge = function (birthYear) {
//     return 2022 - birthYear;
// }


// const age2 = calcAge(2000);
// console.log(age2);

// console.log(calculateAge(2001));

// // -- arrow functions
// // a simple form of function expression shorter to write


// const calc_theAge = birthYear => 2022 - birthYear;

// console.log(calc_theAge(1990));

// const yearsUntilRetirement = (birthYear, firstname) => {
//     //calc the age
//     const age = 2022 - birthYear;
//     const retirement = 60 - age;

//     //return key used when the values we are returning is not a one line function // or more than one line of code
//     return `${firstname} retires in ${retirement} years`;

// }

// // arrow function to get to use 'this' keyword

// console.log(yearsUntilRetirement(1994, 'Martin'));


// // team wins if ( win >= 2* avg of other team)
// // else no team wins

// // 1. arrow funciton

// const calcAverage = (firstScore, secondScore, thirdScore) => {

//     const theAverage = (firstScore + secondScore + thirdScore) / 3;

//     return theAverage;
// }

// // 2 .
// // const averageDolphins = calcAverage(44, 23, 71);
// // const averageKoalas = calcAverage(65, 54, 49);

// // test data 2 two

// const averageDolphins = calcAverage(85, 54, 41);
// const averageKoalas = calcAverage(23, 34, 27);

// console.log(averageDolphins);
// console.log(averageKoalas);

// // 3. 

// const checkWinner = function (avgDolhins, avgKoalas) {

//     if (avgDolhins >= 2 * avgKoalas) {

//         console.log(` Dolphins  wins by ${avgDolhins} vs ${avgKoalas} `);
//     }

//     else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(` Koala wins by ${avgDolhins} vs ${avgKoalas}`);
//     }

//     else {
//         console.log(`Draw / or nobody wins`);
//     }

// }


// const results = checkWinner(averageDolphins, averageKoalas);

// console.log(results);


//-- intro to arrays
const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

// 
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1994, 1800, 1890, 1902);
console.log(years);

// get the 2nd element the array
console.log(years[1]);

//get the lenght or the total number of elements in the array
console.log('total length', years.length);

//to get the last element of the array

console.log(friends[friends.length - 1]);

// assign a new value to  const array 
friends[2] = 'Yuda mu Gyata';
console.log(friends);

const bioData = ['Kumasi', 'Something', 2022 - 1990, friends];

console.log(bioData);

//-- 40 basic array operations

// add forson to the end of the array 

//to get the new length of the array use
const newLength = friends.push('Forson');
console.log(friends);
console.log(`the new length is ${newLength}`);

// to add the new element to the beginning of an array
friends.unshift('Pure Akan');
console.log(friends);

// removes the last element from an array
const poppedElement = friends.pop();
console.log(`the removed/popped element from the array ${poppedElement}`);
console.log(friends);

// the value removed from the end of aarray


// to remove from the begginning
friends.shift();
console.log('the first element is removed/ shifted', friends);

// use indexOf to get the array positoin of an element 


//console.log(friends.indexOf('Steven'));
console.log('the position of Steven in the array is :', friends.indexOf('Steven'));


//-- introduction to objects


const steveArray = [
    'Steve',
    'Twig',
    2022 - 1800,
    'realist',
    ['Michael', 'Kwesi', 'Sam']
]

//the objects
// object literall syntax
//the order of the elements does not matter -- hashMap or unstructured data
const steve = {
    firstName: 'Stephen',
    lastName: 'Twig',
    age: 2037 - 1991,
    job: 'plumber',
    friends: ['Micheal', 'Kwesi', 'Sam']
}


console.log(steve);

// you can use the dot notation

console.log(steve.lastName);

//in the bracket notation , you can use an expression
//bracket notation

const nameKey = 'Name';
console.log(steve['firstName']);
console.log(steve['first' + nameKey]);
console.log(steve['last' + nameKey]);

const interestedIn = prompt(`What do you you want to know about steve? Choose between, lastName, job, firstName`)

//if a value exists
if (steve[interestedIn]) {

    console.log(steve[interestedIn])
} else {
    console.log(`Wrong value use : Choose between, lastName, job, firstName`);
}

//if the property does not exist - it will return undefined

steve.location = 'Ghana';
steve['twitter'] = '@twitterhandle';

console.log(steve);
