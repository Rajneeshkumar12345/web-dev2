
const url = 'https://en.wikipedia.org/wiki/Main_Page'

const request = require('request')
const cheerio = require('cheerio')

request(url, cb)

function cb(error, response, html){
    if(error){
        console.log(error);
    }
 else {
    // console.log(html);
    handleHtml(html);
}
}

function handleHtml(html){
    let $ = cheerio.load(html);
    let eleString = $('.portal-hright portal-vbot');
    //console.log(eleString)
    let link = eleString.attr("href"); 
    console.log(link)
}

