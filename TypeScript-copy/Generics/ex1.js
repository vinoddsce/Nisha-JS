// function identity(arg: number): number {
//     return arg;
// }
// function identity(arg: number): number {
//     return arg;
// }
// let a: string = identity(100);
// console.log("a: ", a);
// function identity<T>(args: T): T {
//     return args;
// }
// let a = identity<number>(100);
// console.log("a: ", a);
function identity(args1, args2) {
    return args1;
}
var a = identity(100, "Hundred");
console.log("a: ", a);
