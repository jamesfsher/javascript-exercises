const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    }
    let arr = [0, 1];
    for (let i = 1; i < n; i++) {
        arr.push(arr[i - 1] + arr[i]);
    }
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
