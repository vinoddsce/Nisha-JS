//Alternatively we can define constants in TS as follows.


/*

 Enter your color option.
 0 RED
 1 GREEN
 2 BLUE

*/
// let userInput = 0;

// enum Color { RED, GREEN, BLUE };

// if (userInput === Color.RED) {
//     console.log("You Choose RED");
// } else if (userInput === Color.GREEN) {
//     console.log("You Choose GREEN");
// } else if (userInput === Color.BLUE) {
//     console.log("You Choose BLUE");
// }
// console.log(Color.RED);
// console.log(Color.GREEN);
// console.log(Color.BLUE);



enum Transaction { WITHDRAWL = 5, BALACE_CHECK = 2, AMOUNT_TRANSFER = 3 }


console.log(Transaction.WITHDRAWL);


// Not possible : [ts] Cannot assign to 'WITHDRAWL' because it is a read-only property. [2540]
Transaction.WITHDRAWL = 100;