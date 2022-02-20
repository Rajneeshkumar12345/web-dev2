

const url="https://en.wikipedia.org/wiki/Main_Page"

const request=require("request")
const cheerio=require("cheerio")

request(url,cb)

function cb(error , response, html){
    if(error){
        console.error(error)
    }else{
        handleHtml(html)
    }
}

function handleHtml(html){
    let $=cheerio.load(html)
    let anchorElem=$('.portal-hright.portal-vbot a')
    let link=anchorElem.attr('href')
    // console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
    // console.log(fulllink)
    
    AllPortals(fulllink)


}

function AllPortals(url2){
    request(url2,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            AtoZindex(html)

        }
    })
}
function AtoZindex(html){
    let $=cheerio.load(html)
    let anchorarr=$('.hlist.noprint a[title="Wikipedia:Contents/A–Z index"]')
    let link =$(anchorarr[0]).attr('href')
    //console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
    // console.log(fulllink)
    Rtag(fulllink)
}

function Rtag(url3){
    request(url3,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            Allpages(html)

        }
    })
}

function Allpages(html){
    let $=cheerio.load(html)
    let anchorElem=$('[id="toc"] tr [title="Special:AllPages/R"]')
    let link=anchorElem.attr('href')
    // console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
   // console.log(fulllink)
      Ptag2(fulllink)

}

function Ptag2(url4){
    request(url4,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            R(html)

        }
    })
}
function R(html){
    let $=cheerio.load(html)
    let anchorElem=$('.mw-allpages-chunk li [title="R"]')
    let link=anchorElem.attr('href')
    // console.log(link)
    let fulllink='https://en.wikipedia.org/'+link
   // console.log(fulllink)
    content(fulllink)

}

function content(url5){
    request(url5,function(error,response,html){
        if(error){
            console.log(error)
        }else{
            contentofRTag(html)

        }
    })
}

function contentofRTag(html){
    let $=cheerio.load(html)
    let bodycontent=$('[id="content"]').text()
    console.log(bodycontent)
    

}

