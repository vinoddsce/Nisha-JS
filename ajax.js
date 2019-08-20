



function callback() {
    console.log("callback() is called !!!!!");
}

function first() {
    console.log("first() called !!!");
    setTimeout(callback, 2000);
    console.log("first() end !!!");
}

first();


// function createHeader(event) {
//     var rootElement = document.getElementById('root');
//     var childElement = document.createElement('h1');
//     childElement.innerHTML = "Hello AJAX !!!";
//     rootElement.append(childElement);
// }


// function loadData() {
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function () {
//         var result = this.responseText;
//         var rootElement = document.getElementById('root');
//         rootElement.innerHTML = result;
//     }

//     http.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     http.send();
// }


// function first() {
//     console.log("first() is called !!!!!");
//     first();
// }

// first();