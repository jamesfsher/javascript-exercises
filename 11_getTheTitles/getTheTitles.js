const getTheTitles = function(books) {
    // forEach?
    // let arr = [];
    // books.forEach((item) => arr.push(item.title));
    // return arr;

    return books.map((item) => item.title);

};

// Do not edit below this line
module.exports = getTheTitles;
