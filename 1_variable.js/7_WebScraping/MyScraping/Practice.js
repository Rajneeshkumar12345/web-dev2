const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')

request(url, cb)

function cb(err, response, html){
    if(err){
        console.error(err);
    } else{
        //console.log(html);
        extractLink(html)
    }
}

function extractLink(html){
  let $ = cheerio.load(html)  
  let anchorElem = $('a[data-hover="View All Results"]')
  let link = anchorElem.attr("href");
  //console.log(link);
  let fullLink = "https://www.espncricinfo.com" + link;
  //console.log(fullLink)

  getAllMatchLink(fullLink)
}

function getAllMatchLink(uri){
    request(uri, function(error, response, html){
        if(error){
            console.log(error)
        } else{
            //console.log(html)
            extractAllLink(html)
        }

    })
}

function extractAllLink(html){
    let $ = cheerio.load(html);
    let ScoreCardArr = $('a[data-hover="Scorecard"]')
    for(let i = 0;i<ScoreCardArr.length;i++){
        let link = $(ScoreCardArr[i]).attr('href')
        let fullLink = 'https://www.espncricinfo.com/'+link
           console.log(fullLink)
    }

}