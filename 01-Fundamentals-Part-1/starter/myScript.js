let js = 'amazing';


// let myCurrentJob = "Farmer";
// let myPreviousJob = 'Athlete';

// console.log(myCurrentJob);


//data types
// symbol , bigInt, undefined , null, number , string , boolean

// let javaScriptIsFun = true;
// const numOfHumanBeings = 0;
// console.log(typeof 34.3);
// console.log(typeof 8888333.8767);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 'Jonas');

// let children;

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof children);



// const birthYear = 1990;
// console.log(birthYear);

//typeof null = object - bug to fix a legacy error /backward commpatibility


// const now = 2022;
// const ageKofi = now - 1992;
// const ageAma = now - 1994;

// console.log(ageAma + 0, ageKofi / 10);


// const city = 'accra';
// const country = 'GH';

// console.log(city + ',' + country);

// - coding challenge

// BMI  = MASS / HEIGHT ** 2 OR
// BMI = MASS / HEIGHT * HEIGHT
// mass in kg  and height in meter (m)

//1.
// const marksWeight = 78;
// const marksHeight = 1.69;

// const johnsWeight = 92;
// const jjohnsHeight = 1.95;

// //2.

// let marksBMI;
// let johnMBI;

// marksBMI = marksWeight / marksHeight ** 2;

// console.log(" Marks BMI:", marksBMI);


// johnMBI = johnsWeight / (jjohnsHeight * jjohnsHeight);

// console.log(" Johns BMI:" + johnMBI);


// const markHigherBMI = marksBMI > johnMBI;
// console.log(markHigherBMI);

// -- string and template literals

const firstName = " Jonas";
const job = "teacher";
const birthYear = 1994;
const year = 2037;

// add the year- birthYear to the strings is called type coercion - forces javascript to convert the number to a string
// const Jonas = "I'm" + firstName + ',a ' + (year - birthYear) + 'years old  ' + job + '!';

// console.log(Jonas);

// //template literals makes it easy so you can

// // backticks ``

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} `;

// console.log(jonasNew);

// //old way
// console.log("String with \n\
// multiple \n\
// lines");


// //with template literals
// console.log(`String with
// multiple
// lines`)

// -- if/else

// -- coding challenge 2

// const markBMI = 28.3;
// const johnBMI = 29.9;
// const isMarksBMIhigher = markBMI > johnBMI;

// if (isMarksBMIhigher) {

//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);

// } else {

//     console.log(` John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }

// -- type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN); //is an invalid number or Not a Number

// // --and type coercion
// //the plus (+) operator in strings converts Numbers to strings
// console.log(' I am ' + 23 + 'years old');

// // the minus (-) operator converts strings to  Numbers
// console.log('23' - '10' - 3); // 10
// console.log('23' + '10' + 3); // 23103

// console.log('23' / '2'); // 11.5

// --truthy and falsy values

// 5 falsy values : 0 , '', null , undefined ,NaN
// the above will be false when converted to Boolean
// all other values are true

// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean('Jonas'));

// // type coercion happens in if () else blocks 

// const money = 0;
// if (money) {
//     console.log("dont spend it oo, else ... wob3y3 shi roff");
// } else {
//     console.log("you should get a job");
// }


// // strict equality operator ===  does not perform type coercion eg. 18 === 18 true
// const age = '18';

// // loose equality operator ==  does type coercion eg. '18' == 18 is true

// if (age === 18) console.log('You just became and adult');
// else console.log('not true still young')

// if (age == 18) console.log('You just became and adult');

// // the value will be stored in the favourite variable
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);

// console.log(typeof favourite);

// if (favourite === 666) {
//     console.log(`${favourite} is a scary number`);

// } else if (favourite === 7) {

//     console.log(`${favourite} is a cool number`);

// } else if (favourite === 9) {
//     console.log(`${favourite} is a dope number`);
// }
// else {
//     console.log(`${favourite} is neither 666, 7 or 9  `);
// }


// //strict not equal to [ !==]

// if (favourite !== 23) console.log(`why not 23?`)

const day = 'monday';

switch (day) {
    case 'monday': // day === "monday"
        console.log("lundi");
    // break;

    case 'tuesday':
        console.log("mardi");
        break;

    case 'wednesday':
    case 'thursday':
        console.log("mecredi et jeudi");

        break;

    default:
        console.log("any other day");
        break;
}


// -- tenary operator
const legs = 4;

console.log(`I am a ${legs < 2 ? 'human' : 'animal'}`);


// use BABEL for transpiling and polyfilling
// to make JavaScript backward compatible with old browsers

