// Split method - me element remove ho jata hai


let str = 'Pepcoder'

let partOfString = str.split('c')

console.log( partOfString)  // Ans ko array me deta hai

//split function will split a string according to a passed paramerter
// and will return the left and the right part in an array



// Join method - me split elemennt ko join kr deta hai

let joinedStr = partOfString.join('c')

console.log( joinedStr)

// Join function will take an array and it will fill the parameter after each element 
//of the array with the passed parameter
// and will return the complete str


