// Exercise 1: Print "Hello, World!" to the console
console.log("Hello, World!");

// Exercise 2: Random Number Guessing Game
let num = Math.round(Math.random() * 10);
let number = prompt("Guess a number between 1 and 10");
console.log(num);

if (number == num) {
    console.log(alert("Congrats!"));
} else if (num > number) {
    console.log("Too high");
} else if (num < number) {
    console.log("Too low");
}

// Exercise 3: Bubble Sort an Array of Numbers
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// Bubble Sort Algorithm
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap elements
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

// Print sorted array
arr.forEach((element) => {
    console.log(element);
});

// Exercise 4:Count occurrences of 'love' in a string
const hey='Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(hey.("love")); 

// Exercise 5: String Splitting Examples
let firstName = 'Asabeneh'
console.log(firstName.split())     // ["Asabeneh"]
console.log(firstName.split(''))   // ["A", "s", "a", "b", "e", "n", "e", "h"]

// Exercise 6: Count Specific Word in a Sentence
function countWord(sentence, targetWord) {
    const words = sentence.toLowerCase().split(/\s+/); // split by spaces
    const count = words.filter(word => word === targetWord.toLowerCase()).length;
    return count;
}
const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const word = "love";

console.log(countWord(sentence, word)); // Output: 2

// Exercise 7: Count Occurrences of the Word "because"
const sent = 'You cannot end a sentence with because because because is a conjunction';
console.log(sent.match(/because/g).length); // Output: 3

// Exercise 8: Clean Sentence and Count Words
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const cleanedSentence = sentence2.replace(/[%$@&;#]/g, ''); // Remove special characters
const words = cleanedSentence.split(/\s+/); // Split by spaces
const wordCount = words.length;

// Exercise 9: Calculate Total Income from Different Sources
let sentence3 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let monthlysalary = 5000;
let annualbonus = 10000;
let onlinecourses = 15000;
let monthlyincome = monthlysalary + annualbonus + onlinecourses;
let annualincome = monthlyincome * 12;
let totalincome = monthlyincome + annualincome;
console.log(totalincome);

// Exercise 10: Calculate Area of a Triangle from User Input
let height = prompt("Enter the height of the triangle");
let base = prompt("Enter the base of the triangle");
let area = 0.5 * (base * height);
console.log(area);

// Exercise 11: Weather-based Message Using Switch Statement
let weather = 'cloudy'
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log('No need for rain coat.')
}

// Exercise 12: Check if a number is even or odd
let numToCheck = 7;
if (numToCheck % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Exercise 13: Find length of a string
let str = "JavaScript";
console.log(str.length);

// Exercise 14: Compare two values using strict equality
let a = 10;
let b = '10';
console.log(a === b); // false

// Exercise 15: Find min and max using Math object
let min = Math.min(1, 2, 3, 4, 5);
let max = Math.max(1, 2, 3, 4, 5);
console.log("Min:", min, "Max:", max);

// Exercise 16: Get current year, month, and day
const now = new Date();
console.log("Year:", now.getFullYear(), "Month:", now.getMonth() + 1, "Day:", now.getDate());

// Exercise 17: Function to square a number
function square(n) {
    return n * n;
}
console.log(square(5));

// Exercise 18: Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30)); // 86

// Exercise 19: Print numbers from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Exercise 20: Sum of array elements using for loop
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);

// Exercise 21: Reverse a string
let original = "hello";
let reversed = original.split('').reverse().join('');
console.log(reversed);

// Exercise 22: Check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); // true

// Exercise 23: Remove duplicates from an array
let items = [1, 2, 2, 3, 4, 4, 5];
let uniqueItems = [...new Set(items)];
console.log(uniqueItems); // [1, 2, 3, 4, 5]

// Exercise 24: Capitalize the first letter of each word in a sentence
let sentence4 = "i love javascript";
let capitalized = sentence4.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalized);
