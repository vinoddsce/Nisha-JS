var Person = function (id, name) {
    this.id = id;
    this.name = name;
    this.display = function () {
        console.log("ID: ", this.id, ", Name: ", this.name);
    }
}

var vinod = new Person(1, "Vinod");
var nisha = new Person(2, "Nisha");

vinod.display();
nisha.display();
