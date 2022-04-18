// write a function to add two numbers and print their sum (function Expression)


// let add =(a , b)=>{ // It is called also Fat Arrow So no need to function Keyword
//     console.log(a+b)
// }

// add(3 , 4)


// let regularFunction = function(name){
//      console.log(`I am ${name}`)
// }


// let arrowFunction = (name) =>{
//      console.log(`I am ${name}`)
// }


//  regularFunction('Adam')

//  arrowFunction('Steve')


// ******** Case -- 1*******//

// let test = () => {
//     console.log(this) // {} - Just because of empty element
// }
// test()




// ******** Case -- 2  *******//


// let person = {
//        name : 'Adam',
//        age : 27 ,

//        showDetails : function(){
//               console.log(this.name + ' ' + this.age)
      
//        },

//        showDetailsArrow : ()=>{
//               console.log(this.name + ' ' + this.age)
//        }
// }


//  person.showDetails()
//  person.showDetailsArrow() // Undefined - Becuase of emmpty(This) objects 