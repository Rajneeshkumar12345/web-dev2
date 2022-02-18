const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')

const cheerio = require('cheerio')

const allMatchObj = require('./allMatch'); 

const fs = require('fs')

const path = require('path')

let iplPath = path.join(__dirname , "IPL")

dirCreator(iplPath);



request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.error(err);
  } else {
         //console.log(html);  // we have get all HTML data from that web page but that is no need
    extractLink(html);
  }
}

function extractLink(html) {
    let $ = cheerio.load(html);  // basically $ means selTool it means we have use all attributes of cheerio
    let anchorElem = $('a[data-hover="View All Results"]'); // Since that element present in Anchor tag
  
    let link = anchorElem.attr("href");  // Since AnchorTag present href So we need to href Link
  
    //console.log(link)  
  
    let fullLink = "https://www.espncricinfo.com" + link; // Go to view full result webPage
      //  console.log(fullLink)


    
  //getAllMatchLink(fullLink)          // Now we need to get all matches webLink
  allMatchObj.getAllMatch(fullLink)
}

// function getAllMatchLink(uri){
//         request(uri , function(error , response , html){
//                if(error){
//                       console.log(error)
//                }
//                else{
//                      // console.log(html)
//                       extractAllLink(html)
//                }
//         } )
// }


// function extractAllLink(html){
//    let $ = cheerio.load(html)

//    let scoreCardArr = $('a[data-hover="Scorecard"]')

//    for(let i=0 ; i<scoreCardArr.length ; i++){
//           let link = $(scoreCardArr[i]).attr('href')
//           let fullLink = 'https://www.espncricinfo.com/'+link
//            console.log(fullLink)
//    }


// }



function dirCreator(filePath){
  if(fs.existsSync(filePath)==false){
    fs.mkdirSync(filePath)
  }
}
