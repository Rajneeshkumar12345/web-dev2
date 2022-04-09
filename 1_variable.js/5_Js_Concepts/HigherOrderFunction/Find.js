

// Find returns the first element of an array that satisfy the condition
// Whenever first time condition has satisfied this will return ans at that time 

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


const firstWithdrwal = transactions.find(function(n){
       return n < 0
})

console.log(firstWithdrwal)
//
