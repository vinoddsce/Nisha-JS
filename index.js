// sayHello();
// function sayHello() {
//     console.log("Hello ");
// }


// console.log(sayHi)
// var sayHi = function () {
//     console.log("Hi ");
// }
// console.log(sayHi);









var display = function () {
    console.log(this);
}

var Person = function (id, firstName, lastName, isMarried, yearOfBirth) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isMarried = isMarried;
    this.yearOfBirth = yearOfBirth;
    this.display = function () {
        console.log(this);
    }
    this.calculateAge = function (currentYear) {
        var getAge = (year) => {
            console.log(this);
            return year - this.yearOfBirth;
        }
        console.log("Age: ", getAge(currentYear));
        console.log(this);
        // function getAge(year) {
        //     console.log(this);
        //     return year - this.yearOfBirth;
        // }
    }
}

// Person.prototype.calculateAge = function (currentYear) {
//     console.log("Age: ", (currentYear - this.yearOfBirth));
// }

var vinod = new Person(1, "Vinod", "Kumar", false, 1990);

// window.display();
// vinod.display();

vinod.calculateAge(2019);




// Arrow Function
// var arr_fun_name = () => {
// }

// var sayHi = () => {
//     console.log(this);
// }
// sayHi();


// var sayHi = (name) => {
//     console.log("Hi,", name);
// }
// sayHi("Vinod");