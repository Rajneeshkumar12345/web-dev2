const fs = require('fs')

//let buffer = fs.readFileSync('./example.json')  // it gives bufffer data
// This methods is used to covert buffer or any type of  data to json

//console.log(buffer)

//let data = JSON.parse(buffer)
//console.log(data)

const xlsx = require('xlsx')


let jsonFile = require('./example.json') // requiring JSON File
jsonFile.push({
    name: "Thor",
    "last Name": "Odinson",
    isAvenger: true,
    friends: ["Tony", "Peter", "Bruce"],
    age: 102,
    address: {
        planet: "Asgard",
    },
});

// pushing a new object into JSON File

//console.log(data)
//   console.log(jsonFile)

let stringData = JSON.stringify(jsonFile);
// converting json data into string so that we can write it in other files

// console.log(stringData)


fs.writeFileSync("example.json", stringData);

// writing to json file

//console.log("JSON file Updated");


// function excelWriter(fileName, sheetName, jsonData){
//     let newWB = xlsx.utils.book_new();
// // Creating a new Workbok
//  let newWS = xlsx.utils.json_to_sheet(jsonData);
//  //Json is converted inton sheeetformet(Rows, Coloumn)
//   xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
//    xlsx.writeFile(newWB, fileName);
// }

// let newWB = xlsx.utils.book_new();
// // Creating a new Workbok
//  let newWS = xlsx.utils.json_to_sheet(jsonFile);
//  //Json is converted inton sheeetformet(Rows, Coloumn)
//   xlsx.utils.book_append_sheet(newWB, newWS, 'Avengers');
//    xlsx.writeFile(newWB, 'abc.xlsx');



// function excelReader(fileName, sheetName){
//       // convert xlsx into json fle
//    let wb = xlsx.readFile(fileName);
//    let excelData = wb.Sheets[sheetName];
//    let ans = xlsx.utils.sheet_to_json(excelData);
//    console.log(ans)
// }
   // convert xlsx into json fle
//    let wb = xlsx.readFile('abc.xlsx');
//    let excelData = wb.Sheets['Avengers'];
//    let ans = xlsx.utils.sheet_to_json(excelData);
//    console.log(ans)
 //
