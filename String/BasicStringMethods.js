// You can create strings with " or '
// length is a property that gives you the length of a string
// toUpperCase() is a function that converts the string to upper case
// toLowerCase() is a function that converts the string to lower case
// parentheses () on function calls are required. .length is a property that is already pre-computed; therefore, it does not need parentheses.
// console.log(...) is used for debugging and is NOT a replacement for return.

function getCharCount(str) {
    return str.length;
   }
function shoutMyName(name) {
    return name.toUpperCase();
  }
  function lowerName(name) {
    return name.toLowerCase();
  }

   
   console.log(getCharCount("Dalip"));
   console.log(shoutMyName("Dalip"));
   console.log(lowerName("DALIP"));