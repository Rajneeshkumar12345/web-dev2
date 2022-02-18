//child process is a node module used to create sub proccess within a script
// you can different tasks with your script

const cp = require("child_process");

//  console.log("Opening Calculator");

// cp.execSync("calc");

//  console.log("Trying to open Vs code");

//  cp.execSync("code");

 //cp.execSync('start chrome https://rajneeshkumar12345.github.io/My-website/')

 console.log("output"+ cp.execSync('node test.js'));