// You can access a specific character in a string by using the square brackets syntax [].
// 
// You have to provide the index of the character that you'd like to access, starting from 0.

function getFirstCharacter(name) {
    return name[0];
}
// also we can use name.at(0) and name.at(-1)
function getLastCharacter(name) {
    return name[name.length -1];
}

console.log(getFirstCharacter("Yamunanagar"));
console.log(getLastCharacter("Yamunanagar"));
