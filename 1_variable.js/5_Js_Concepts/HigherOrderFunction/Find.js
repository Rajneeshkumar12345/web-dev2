

// Find returns the first element of an array that satisfy the condition
// Isme jaise hi first ele me condition apply hota hai vaise hi asn return kr deta

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


const firstWithdrwal = transactions.find(function(n){
       return n < 0
})

console.log(firstWithdrwal)
//
