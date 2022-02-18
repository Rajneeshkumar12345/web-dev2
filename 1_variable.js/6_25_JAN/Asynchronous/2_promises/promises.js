const fs = require("fs");

console.log("Before");

// fs.readFile('f1.txt' , function(err , data){
//        if(err){
//               console.log(err)
//        }
//        console.log('File Data -> ' + data)
// })

let promise = fs.promises.readFile("f1.txt");


//console.log(promise)  // Pending





// Fullfiled 

promise.then(function (data) {
  console.log("File Data -> "+ data);
});


// Rejected

promise.catch(function(err){
           console.log(err)
    });
    console.log("After");


