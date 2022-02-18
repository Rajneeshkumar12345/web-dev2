


let arr = [2, 3, 4, 5, 6]

let sumFromRight = arr.reduceRight(function(acc, value){  // at sum starting store zero like accumultor

    let updatedSum = acc + value
    console.log(updatedSum)
     
    return updatedSum
}, 0)  // sum = 0  ( initialization = 0)

console.log(sumFromRight)