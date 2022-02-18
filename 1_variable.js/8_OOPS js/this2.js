

// Node  + strict

'use strict'


//global -


//  1 ----
// console.log(this) 





// 2 -----
// function f(){
//        console.log(this)
// }

// f()





// 3 ----
// let obj = {
//        name : 'Rahul',

//        f: function(){
//               console.log(this)
//        }
// }

// obj.f()





// 4 ----
// let obj2 = {
//        name :'Mrinal',

//        f: function f(){
//               function g(){
//                      console.log(this)
//               }

//               g();
//        }
// }


// obj2.f()