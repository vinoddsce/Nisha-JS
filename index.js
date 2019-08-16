// Arrays
// -------------------------



var n = [15, 6, -2, 66, 32, 87, 1, 54, 0, 73];


// var result = [];
// for (var i = 0; i < n.length; i++) {
//     var value = n[i];
//     value = value + 1;
//     result.push(value);
// }

// var result = n.map(function (value) {
//     return value + 1;
// });


// var result = [];
// for (var i = 0; i < n.length; i++) {
//     var value = n[i];
//     if (value > 0) {
//         result.push(value);
//     }
// }

var result = n.filter(function (value) {
    return value > 0;
});

console.log("Actual: ", n);
console.log("Result: ", result);


