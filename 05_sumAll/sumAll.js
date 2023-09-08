const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0) {
        return 'ERROR';
    }
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return 'ERROR';
    }
    if (b > a) {
        firstNum = a;
        lastNum = b;
    }
    else {
        lastNum = a;
        firstNum = b;
    }

    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
