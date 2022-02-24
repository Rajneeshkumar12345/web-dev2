

//const fs = require("fs");

// console.log("Before");

// fs.readFile("f1.txt", cb1);

// function cb1(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(" " + data);
//     fs.readFile("f2.txt", cb2);
//   }
// }

// function cb2(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(" " + data);
//     fs.readFile("f3.txt", cb3);
//   }
// }

// function cb3(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(" " + data);
//   }
// }

// console.log("After");




let fs = require("fs");

console.log("before");

// f1p.then(cb).then(cb2).then(cb3).catch(function(error){
//   console.log(err)
// })

let f1p = fs.promises.readFile("f1.txt");

//f1p.then(cb);
f1p.then(cb).then(cb2).then(cb3).catch(function(error){
  console.log(err)
})


function cb(data) {
  console.log("File data -> " + data);
  let f2p = fs.promises.readFile("f2.txt");

  //f2p.then(cb2);
  return f2p
}

function cb2(data) {
  console.log("File data -> " + data);
  let f3p = fs.promises.readFile("f3.txt");

  //f3p.then(cb3);
  return f3p
}

function cb3(data) {
  console.log("File data -> " + data);
}

console.log("after");//