const palindromes = function (string) {
    // Variable of all punctuation to remove
    var punctuation = /[\.,?!\s]/g;
    // Replace method to remove all specied punctuation, and set all elements to lower case
    let arr = string.replace(punctuation, "").toLowerCase();
    // May not need to loop halfway, but makes quicker?
    let halfway = Math.floor(arr.length / 2);
    // Loop to compare first character with last, moving right and left through the array one character at a time from each end
    for (let i = 0; i < halfway; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;


// Below are notes and reworked code
    // loop through string,
    // convert to array of letters?
    // if so, remove spaces
    // slice string around both ends of middle
    // compare each letter one at a time
    // might not need to splice, can prob just do in place
    // loop through array, and use i and -i at each loop?

    // This method was initial version of removing spaceas only using loops. Replace method is way easier
    // let spaceIndex = [];
    // let arr = string.split("");
    // for (let i = 0; i <= arr.length; i++) {
    //     if (arr[i] == " ") {
    //         spaceIndex.push(i);
    //     }
    // }
    // for (let i = spaceIndex.length - 1; i >= 0; i--) {
    //     arr.splice(spaceIndex[i], 1);
    // }

