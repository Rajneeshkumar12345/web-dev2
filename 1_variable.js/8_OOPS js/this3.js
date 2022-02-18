   

// Web Broser 


// non strict
 

// 1  ---
   //console.log(this) // window Object






 // 2 ----
// function f(){
//        console.log(this)
// }

// f()


 


//  3 ----

// let obj = {
//        f: function(){
//               console.log(this)
//        }
// }

// obj.f()






// 4 ---
// let obj = {
//        f: function(){
//               function g(){
//                      console.log(this)
//               }
//               g()
//        }
// }

// obj.f()   















  //'use strict'
 

// 1  ---
  //  console.log(this) // window Object






 // 2 ----
// function f(){
//        console.log(this)
// }

// f()


 


//  3 ----

// let obj = {
//        f: function(){
//               console.log(this)
//        }
// }

// obj.f()






// 4 ---
// let obj = {
//        f: function(){
//               function g(){
//                      console.log(this)
//               }
//               g()
//        }
// }

// obj.f()