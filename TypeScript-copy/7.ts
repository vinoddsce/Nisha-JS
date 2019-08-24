
// Arrow functions 

// syntax of arrow function 

// var ref = () => {
//     return something;
// }


// let log = function (message) {
//     console.log(message);
// }
// log("Hi");


let log = (message: string) => console.log(message);

log("Hello !!!!");
// log(100);


// let doLog = (message) => console.log(message);
// doLog("Arrow");


// Custom types in JS ( User Defined Data Types )



let drawPoint = (x: number, y: number) => {
    console.log('X: ' + x);
    console.log('Y: ' + y);
}
drawPoint(1, 2);


// What happens if function has too many parameters

// let drawPoint = (x, y, a, b, c, d, e, f) => {
//     console.log('X: ' + x);
//     console.log('Y: ' + y);
// }

// Let Car has so many properties and we dont want to pass all them as parematers to function. 
// Instead we need to encapsulate them in on place (Car Object) and pass only Object. 


// Example instead of passing x, y we can pass point object which encapsulate x, y. 

// let drawPointObject = (point) => {
//     console.log('X: ' + point.x);
//     console.log('Y: ' + point.y);
// }

// var point = {
//     x: 100,
//     y: 2
// }

// drawPointObject(point);


// // But what happens when i pass other than point object. I wont get any compiler 
// // error, but i get run time error. Because the algorithm in the drawPointObject
// // expecting the values of x and y.

// var diffObj = {
//     name: "Vinod"
// };

// drawPointObject(diffObj);


// let value: number = 100;
// value = "100";


// let display = (value: number) => {
//     console.log("Value Is ", value);
// }

// display(100);
// display("Hundred");


// let draw = (point: { x: number, y: number }) => {
// }

// let point = {
//     x: 100,
//     y: 200
// }
// draw(point);

// let diffObj = {
//     name: "Vinod"
// }
// draw(diffObj);

// So, what's the solution for this ?????
// There are two solutions for this.

// 1. Inline annotation as follows. 

// Just like we annotate the type as let n: number, we can 
// use custom type for the custom object. 


// let n: number = 100;
// // n = "A";

// let point: { x: number, y: number } = { x: 100, y: 200 };
// point = { x: 1, y: 2 };
// point = { x: 112, y: 24 };

// let drawPointObjectInlineAnnotation = (point: { x: number, y: number }) => {
//     console.log('X: ' + point.x);
//     console.log('Y: ' + point.y);
// }

// drawPointObjectInlineAnnotation({
//     x: 1,
//     y: 2
// });

// drawPointObjectInlineAnnotation({
//     name: "Vinod"
// })


// The above approach is works fine. But the it's little bit verbose. 

// What if object has so many attributes. ????
// Sometimes another function also expects point object and that function also has to 
// be inline annotated ..???? We don't want to repeat this object literal in many places ... 


// 2. Using Interfaces. 

// interface Point {
//     x: number,
//     y: number,
//     z: number
// }

// // // With this interface i am defining an shape of an object. 

// let drawPointObjectInterface = (point: Point) => {
//     console.log('X: ' + point.x);
//     console.log('Y: ' + point.y);
// }

// drawPointObjectInterface({
//     x: 1,
//     y: 2,
//     z: 3
// });


// drawPointObjectInterface({
//     x: 1,
//     y: 2
// });

// Now it's much cleaner and we can also use it in many places. 


