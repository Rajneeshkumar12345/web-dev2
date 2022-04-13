// SPREAD OPERATORS FEATURES

// 1------------
// Clone arrray 

let arr1 = [1,2,3]

let arr2 = [...arr1]

// copy using spread syntax

//console.log(arr1); // [1, 2, 3]
//console.log(arr2); // [1, 2, 3]



// However, if you want to copy arrays so that they do not refer to the same array,
// you can use the spread operator. This way, the change in one array is not reflected 
// in the other. For example,

// append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]      




// 2------------
///*************************************************** */

// let arr = ['My', 'Name' , 'Is' , 'Rajneesh']

// console.log(arr)
// console.log(...arr)  // My Name Is Rajneesh




// 3 --------------
// *********************//
// Copy through spread operator

// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2); 
//  Output:
//  ["one", "two", "three", "four", "five"]



// 4 -------------

// *******Spread operator with Objects

// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}


// 5------------

// When the spread operator is used as a parameter, it is known as the rest parameter.

//You can also accept multiple arguments in a function call using the rest parameter. 
//For example,

let func = function(...args) {
    console.log(args);
}

func(3); // [3]
func(4, 5, 6); // [4, 5, 6]