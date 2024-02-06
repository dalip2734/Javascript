//In some scenarios (explained below), you'd like to convert from a string to a number. 
//For that, you'd have to use the Number.parseInt() method.
// The first parameter is the string that you'd like to convert into a number.
// The second argument is the radix that will be used in the conversion.
// The radix is the base of the numerical system that you'd like to use. For most use cases the radix you'd like to use is 10 which represents the way we count numbers in our everyday lives. 
//This system is called the decimal system (because we have 10 fingers, so we use the digits from 0 to 9).
//Number.parseInt(string, radix);

let a = 10;
let b = "20"; // we forgot to convert it to a number
console.log(a + b); // "1020" (concatenation instead of sum)
console.log(Number.parseInt("123abc", 10)); // 123
console.log(Number.parseInt("5meters", 10)); // 5