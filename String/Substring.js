// Substring signature
// A function signature gives you an explanation of the parameters that you need
// to pass for that method. Let's take a look at the signature of substring:
//someString.substring(indexStart, indexEnd) declaration.

// A substring is a part or a portion of a string.
// string.substring(indexStart, indexEnd) is used to return a portion of the string.
// indexStart: the position of the first character you'd like to include.
// indexEnd: the position of the first character you'd like to ignore.
// the indexEnd argument is optional which means you can leave it out.

function skipFirstCharacter(text) {
    return text.substring(1);

}
console.log(skipFirstCharacter("Dalip")); // "alip"