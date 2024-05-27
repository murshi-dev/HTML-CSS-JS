//to didplay info in the console-output
console.log("hello from java script");
//display messages in the web page
//DOCUMENT OBJECT MODEL - DOM
document.write("hello from the web page");
//VARIABLES
//var let const
//var - not widely used - global scope
let age = 30; //no need to specify data types explicitly
console.log("age entered is", age);
//const - constant values
const marks = 78;
console.log("constant marks: ", 78);
var price = 78.8;
console.log("decimal value price: ", price);
//var - global scope
//let const - block scope

const uname = "jane";
const uage = 35;
const rating = 3.5;
const isCool = true;

console.log(uname);
console.log(uage);
console.log(rating);
console.log(isCool);

//check the data type  --use typeOf
console.log(typeof uname);
console.log(typeof uage);
console.log(typeof rating);
console.log(typeof isCool);

//STRINGS
//concatenate - adding two strings
console.log("name is " + uname + " and age is " + uage);
//another way of using variables
console.log(`name is ${uname} and age is ${uage}`);

//string methods
const s = "hello world";
//length of string
console.log(s.length);
//convert to uppercase
console.log(s.toUpperCase());
//convert to lowercase
console.log(s.toLowerCase());
//substring - to retrieve part of the string
console.log(s.substring(0, 5));
//combine the methods
console.log(s.substring(0, 5).toUpperCase());

//conditionals
//if else
const xx = 10;
if (xx == 10) {
  console.log("xx is 10");
}
//identity operator ===, checks the value and data type
const xxx = "10";
if (xxx === 10) {
  console.log("they are same");
} else {
  console.log("they are NOT same");
}
//AND OR
const v1 = 6;
const v2 = 10;
if (v1 > 5 || v2 > 10) console.log("v1 is more than 5 or v2 is more than 10");
if (v1 > 5 && v2 > 10) console.log("v1 is more than 5 and v2 is more than 10");
//displays no output

//ternary operator ?:
const tervar = 10;
const color = tervar > 10 ? "red" : "blue";
console.log(color);

//switch
const colors = "red";
switch (colors) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("no color");
    break;
}

//loops
//for
for (let i = 1; i <= 10; i++) {
  console.log("5" + "*" + i + "=" + 5 * i);
}
//while
let i = 1;
while (i <= 10) {
  console.log("5" + "*" + i + "=" + 5 * i);
  i++;
}
//functions
//syntax
//function functionName(parameters)
//{
//function body
//}

//function to add numbers
//function definition
function addNums(num1, num2) {
  console.log(num1 + num2);
}
//function calling
addNums(34, 1);

//function with return type
function addNumber(num1, num2) {
  return num1 + num2;
}
//function calling
console.log(addNumber(34, 1));

//another way to write function -- arrow function
const addNumArrow = (num1, num2) => {
  return num1 + num2;
};
//function calling
console.log(addNumArrow(34, 1));

//function triple
function triple(x) {
  return x + x + x;
}
console.log(triple(8));
console.log(triple("hi"));

//rewrite above using arrow function
const tripleArrow = (x) => {
  return x + x + x;
};
console.log(tripleArrow(8));
console.log(tripleArrow("hi"));

//function to check for even number
//use modulo % operator

function even(x)
{
    return  x% 2 == 0;
}
console.log(even(16));
console.log(even(3));

//function to calculate sale price
function salePrice(originalPrice,discountPercent)
{
    return originalPrice-(originalPrice*discountPercent/100.0);
}
console.log(salePrice(780,50));

//function to find are of circle
function circleArea(radius)
{
    return Math.PI*radius*radius;
}
console.log(circleArea(35.2));

//arrays - set of values - same data type
//can hold multiple values
//2 types  - indexed array , associative array
const subjects = ["BM","English","Maths","Science"]
console.log(subjects)
//array methods
//push - add element to the end of array
subjects.push("Add Maths")
console.log(subjects)
//pop - delete element from end of array
subjects.pop("Add Maths")
console.log(subjects)
//unshift - add an element to the front of array
subjects.unshift("History")
console.log(subjects)
//shift - delete an element from the front of array
subjects.shift("History")
console.log(subjects)

//Function to find the area of a given Rectangle
function findRectangleArea(length, width) {
    return length * width;
}

// Example usage:
let length = 5;
let width = 3;
console.log("Area of the rectangle:", findRectangleArea(length, width)); 
// Output: 15



//Function to calculate the salePrice of a product with a discount of 20% and GST of 6%
function calculateSalePrice(originalPrice) {
    let discount = 0.20;
    let gst = 0.06;
    let discountedPrice = originalPrice - (originalPrice * discount);
    let salePrice = discountedPrice + (discountedPrice * gst);
    return salePrice;
}

// Example usage:
let originalPrice = 100;
console.log("Sale price:", calculateSalePrice(originalPrice)); 

//for loop to iterate from 0 to 15 and check if the number is odd or even

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


//JavaScript conditional statement to find the largest of five numbers
function findLargestNumber(a, b, c, d, e) {
    let largest = a;

    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    if (d > largest) {
        largest = d;
    }
    if (e > largest) {
        largest = e;
    }

    return largest;
}

let num1 = 5, num2 = 10, num3 = 3, num4 = 8, num5 = 7;
console.log("The largest number is:", findLargestNumber(num1, num2, num3, num4, num5)); 


//JavaScript function to count the number of vowels in a string
function countVowels(str) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

let inputString = "knowledge is wisdom";
console.log("Number of vowels:", countVowels(inputString)); 

