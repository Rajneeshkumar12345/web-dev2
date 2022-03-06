


// **********************Using INQUIRER LIBRARY *********************

const inquirer = require('inquirer');

function displayList(){
inquirer
  .prompt([
    {
           type : 'list',
           name : 'selection',
           choices : ['About' , 'Skills', 'Academics', 'Projects']

    }
  ])
  .then(function(ans){
     if(ans.selection == "About"){
            console.log("This is About Section");
            displayNext();
     }
     else if(ans.selection == "Skills"){
        console.log("This is Skills Section") ;
        displayNext(); 
     }
     else if(ans.selection == "Academics"){
        console.log("This is Academics Section");
        displayNext();
     }
     else if(ans.selection == "Projects"){
        console.log("This is Projects Section") ; 
        displayNext();
     }
  })
}
displayList();

// Go back option ->

function displayNext(){
    inquirer
.prompt([
 {
        type : 'list',
        name : 'selection',
        choices : ['Go back' , 'exit']

 }
])
.then(function(ans){
 if(ans.selection =='Go back'){
        displayList()
 }
 else if(ans.selection == "exit"){
        console.log('Resume closed')
 }
})
}



  