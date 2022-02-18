// Reduce  Method


// Reduce all the element of an array into a single value

let arr = [2, 3, 4, 5, 6]

let addtion = arr.reduce(function(sum, value){  // at sum starting store zero like accumultor
    let updatedSum = sum + value
    return updatedSum
}, 0)  // sum = 0  ( initialization = 0)

console.log(addtion)


//  for product


let product = arr.reduce(function(acc, value){  // at sum starting store 1 like accumultor
    let updatedproduct = acc*value
    return updatedproduct
}, 1)  //   ( initialization = 1)

console.log(product)
