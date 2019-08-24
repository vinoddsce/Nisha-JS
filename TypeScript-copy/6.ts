// Type assertions.


// let n = 100;
// n = "100";

let message: string = 'abc';
let isEndWithC = message.endsWith('z');
// console.log(isEndWithC);


let m2;
m2 = 'vinod';

// if ((<string>m2).startsWith('v')) {
//     console.log("Starts with V");
// }

// isEndWithC = (<string>m2).endsWith('d');

console.log((m2 as string).startsWith('v'));

// console.log(isEndWithC);

// let endsWithC: boolean = message.endsWith('c');
// console.log(endsWithC);
// console.log(typeof message);


// // By default if you wont set the value the type will be any

// // let msg2: string;
// let msg2;
// console.log(typeof msg2);
// // msg2.
// msg2 = 'Vinod Kumar M';
// msg2 = 100;
// msg2.

// if (typeof msg2 === 'string') {
//     console.log((<string>msg2).substr(0, 4));
// } else {
//     console.log("It's Not String ..... ");
// }

// console.log((msg2 as string).endsWith('d'));

// console.log((<string>msg2).endsWith('c'));
// // // // OR
// console.log((msg2 as string).endsWith('c'));