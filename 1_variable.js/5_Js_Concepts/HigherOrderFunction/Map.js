

// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them.
// In simple words,
// A Higher-Order function is a function that receives a function as an argument
// or returns the function as output.


let arr = [2, 5, 9, 8, 15, 11, 6];

// Map function

//map is itslef a function
//map takes a callback function as an arg
//map will call the callback functions as many times as the elements in the array
//map will process every value and will apply the instruction that inside the callback function


// ********//
//map returns a new array

// *********** Question 1************

//  let sqarr = arr.map(function squrer(v) {
//    return v * v;
//  });

 //console.log(sqarr);

 //console.log(arr);





// ************Question 2 ****************

//  let nameArr = ['raneesh', 'prabhu', 'ram']

//  let nameArr2 = nameArr.map(function (n){
//      return n;
//  })

//  console.log(nameArr2);








//********* */ Questions 3 *************


// let nameArr = ['Vishal Kumar', 'Vaibhav Rawal', 'Anmol Taneja']
// //Task - first and last name split

// let modifiedArr = nameArr.map(function(n){
//     let partsOfname = n.split(" ");
//     return partsOfname
// })

// console.log(modifiedArr)







// ************* Question 4 ********************


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;
// Change into rupaye using map function

let transactionsinRs = transactions.map(function(n){
        return (n/inrtToUsd).toFixed(); // 2 point tak ans dega toFixed ki help se
})

console.log(transactionsinRs)
