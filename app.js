console.log("starting app.js");

const fs = require('fs');
const os = require('os');
const _= require('lodash');
const notes = require('./notes.js');


// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
var filteredArray = _.uniq(['Mike', 1, 'Mike', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log('Result:', notes.add(9, -2));

// var res = notes.addNote();
// console.log(res);
// var user = os.userInfo();


// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);