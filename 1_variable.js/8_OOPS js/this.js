// Node -> non Strict Mode 




  //   1 -----
    //  console.log(this) // global area  // Empty Object








//   2 ------
    //inside a function
//     function f(){
//        console.log(this)
// }

// f()





 /// 3 --- 
// inside a function inside an  Object

// let obj ={
//    name : 'rahul',

//    f:function(){
//          console.log(this)
//    }
// }
//   obj.f() // it will return the object Itself







//  4 -----

// let obj2 ={
//     name :'Rahul',
//     f : function(){
//            function g(){
//                   console.log(this)
//            }
//            g()
//     }
    
// }

// obj2.f()


//Sumarry -

//Context : node + non strict ->

// global area -> empty Object
// function - > global Object

// obj -> function - object Itself

// obj - function - function -  global Object