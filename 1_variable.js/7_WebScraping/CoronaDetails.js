
// Webscraping - Extracting meaningfull HTML data from different website is knows as webscrsping



const request = require('request') // Website server requests 

const cheerio = require('cheerio') // meaning full data collect help it means Specially  particular data 

console.log("before");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    handleHtml(html);
  }
}


function handleHtml(html){
    let selTool = cheerio.load(html)
   // console.log(selTool);

   let contentArr = selTool('.maincounter-number span')

    //   for(let i=0 ; i<contentArr.length ;i++){
    //       let data = selTool(contentArr[i]).text()
    //       console.log(data)
    //   }  // loop lagane se iss class ke sare data aa jayega

    let totalcases = selTool(contentArr[0]).text();
    console.log( 'TotalCases: ' + totalcases ) ///

  
   
    let totalDeaths = selTool(contentArr[1]).text(); // cases
    let totalRecoveries = selTool(contentArr[2]).text();
   
    console.log("Totals Deaths", totalDeaths);
    console.log("Total Recoverd", totalRecoveries);
   
   
   
   
   
}







console.log("after");