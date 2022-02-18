// let arr = [1,2,2]
// console.log(arr,typeof(arr))


   let obj = {
     name : 'rajneeesh',
     age : 21
 }
 console.log(obj, typeof(obj))



 function greet(){
     console.log('hello')
 }
 console.log(greet, typeof(greet))



let firstPerson = {
      Name : 'Rajneessh',
      age : 21
}

let secondPerson = firstPerson

firstPerson.name  = 'Hanuman'


console.log(firstPerson)

console.log(secondPerson)
// Since it is made on Heap Memory so, this is folllow FIFO - First in First out
// So it is follow Call by reference


