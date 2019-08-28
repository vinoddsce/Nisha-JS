const square = function (n) {
    return n * n;
}

exports.PI = 3.14;

var privateFun = () => {
}

privateFun();
exports.privateFun = privateFun;

exports.squareFun = square;