// Arrays
// -------------------------



// var n = [15, 6, -2, 66, 32, 87, 1, 54, 0, 73];


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

// var result = n.filter(function (value) {
//     return value > 0;
// });

// console.log("Actual: ", n);
// console.log("Result: ", result);



// id
// name
// phone
// purchase: 100.2
// var Customer = function() {
// }

// Create some objects UPTO 10

// Collect customers whose purchase is >= 5




function first() {
    var value = 200;
    return function inner() {
        console.log("inner(): ", value);
    }
}

// console.log(first());
// var result = first();
// result();

first()();


// function main(fun) {
//     fun();
// }

// function display() {
//     console.log("Hello !!!!");
// }

// main(display);


