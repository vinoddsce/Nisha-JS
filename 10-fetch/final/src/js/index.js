// var url = 'http://localhost:8000/login';
// var data = {
//     email: 'vinod.dsce@gmail.com',
//     password: '12345678'
// };

// fetch(url, {
//     method: 'POST', // or 'PUT'
//     mode: 'cors', // no-cors, cors, *same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     body: JSON.stringify(data), // data can be `string` or {object}!
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(res => res.json())
//     .then(response => console.log('Success:', JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));



// var url = 'http://localhost:8000/students';
// var data = {
// };
// fetch(url, {
//     method: 'GET', // or 'PUT'
//     mode: 'cors', // no-cors, cors, *same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMWExYTBkZGIxZGJkMjNiZTE5ZjMxZCIsIm5hbWUiOiJWaW5vZCIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvZWFjOTQ3MGIwYTZkNzQxYzU0MmU1NTM0NTk1OTM0NDU_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTY1NzUxMDY5LCJleHAiOjE1NjU3NTQ2Njl9.OnBiIBb6dsyGL60Ml6Se8FyDOfFYKevKEilVMYav0Ac'
//     }
// }).then(res => res.json())
//     .then(response => console.log('Success:', JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));



// var url = 'http://localhost:8000/login';
// var data = {
//     email: 'vinod.dsce@gmail.com',
//     password: '12345678'
// };

// login(url, data).then(response => console.log('Success:', JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));

// function login(url = '', data = {}) {
//     return fetch(url, {
//         method: 'POST', // or 'PUT'
//         mode: 'cors', // no-cors, cors, *same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         body: JSON.stringify(data), // data can be `string` or {object}!
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => res.json())
// }

var url = 'http://localhost:8000/students';

getAllStudents(url).then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

function getAllStudents(url = '', data = {}) {
    return fetch(url, {
        method: 'GET', // or 'PUT'
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMWExYTBkZGIxZGJkMjNiZTE5ZjMxZCIsIm5hbWUiOiJWaW5vZCIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvZWFjOTQ3MGIwYTZkNzQxYzU0MmU1NTM0NTk1OTM0NDU_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTY1NzUxMDY5LCJleHAiOjE1NjU3NTQ2Njl9.OnBiIBb6dsyGL60Ml6Se8FyDOfFYKevKEilVMYav0Ac'
        }
    }).then(res => res.json());
}

