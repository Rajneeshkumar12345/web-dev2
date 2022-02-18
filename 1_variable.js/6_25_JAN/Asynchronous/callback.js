
const fs = require('fs')




// Callback function - any function that is passed as an
//argument to another function is known
//as a callback function




// function printFirstName( firstName, callback){  // parameter pass
//     console.log(firstName)
//     callback('kumar')
// }

// function printLastName(lastName){

// console.log( lastName)
// }

// printFirstName( 'Rajneesh' , printLastName)  // as an argument pass kiya






//Synchronus way of reading file

// console.log('before')

// let data = fs.readFileSync('f1.txt')

// console.log(' ' + data)

// console.log('after')




//Asynchronous way of reading a file

console.log("before");

fs.readFile("f1.txt", cb);

fs.readFile("f2.txt", cb2);

function cb(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(" " + data);
  }
}

function cb2(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(" " + data);
    }
  }
  console.log('after');
