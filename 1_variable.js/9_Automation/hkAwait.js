


const loginLink = "https://www.hackerrank.com/auth/login";
let email = "wahano6617@balaket.com";
let password = "wahan@12345";
let puppeteer = require("puppeteer");
const codeFile = require("./code");

console.log("Before");

(async function () {
  try {
    let browserWillbeLaunced = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    });

    let newTab = await browserWillbeLaunced.newPage();

    await newTab.goto(loginLink);

    await newTab.type("input[id='input-1']", email, {
      delay: 100,
    });

    await newTab.type("input[id='input-2']", password, {
      delay: 100,
    });

    await newTab.click('button[data-analytics="LoginPassword"]', {
      delay: 100,
    });

    
    await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab);

    await waitAndClick('input[value="warmup"]', newTab);

    let ChallengesArr = await newTab.$$(
        ".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",
        { delay: 100 }
      );

      console.log("Total Question ->" + ChallengesArr.length);

      await questionSolver(newTab, ChallengesArr[0], codeFile.answers[0]);

  } catch (error) {}
})();





//  // Key Tool  used:-
// //  1. puppeteer
// //  2. Promise
// //  3. $$ - jquery
// //  4. waitForSelector
// //  5. waitAndClick

// // wahano6617@balaket.com  -> pass - wahan@12345  -> Name - dalton kumar
// const loginLink = "https://www.hackerrank.com/auth/login";

// let email = "wahano6617@balaket.com";
// let password = "wahan@12345";

// let puppeteer = require("puppeteer");
// // Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol . 
// //Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.
// const codeFile = require('./code')

// console.log("Before");

// let page;

// // Puppeteer works on promises

// let browserWillbeLauncedPromise = puppeteer.launch({
//   headless: false,
//   defaultViewport: null,
//   args: ["--start-maximized"],
// });
// // we used puppeteer launch method to return an instance of broswer  

// browserWillbeLauncedPromise
//   .then(function (browserInstance) {
//     let newTabPromise = browserInstance.newPage();
//     return newTabPromise;
//   })
//   .then(function (newTab) {
//     console.log("New Tab opened");
    
//     page = newTab;
//     let pageWillbeOpenedPromise = newTab.goto(loginLink);
//     return pageWillbeOpenedPromise;
//   })
//   .then(function () {
//     let typedEmailPromise = page.type("input[id='input-1']", email, {
//       delay: 100,
//     });
//     return typedEmailPromise;
//   })
//   .then(function () {
//     let typePasswordPromise = page.type("input[id='input-2']", password, {
//       delay: 100,
//     });
//     return typePasswordPromise;
//   })
//   .then(function () {
//     let loginPromise = page.click('button[data-analytics="LoginPassword"]', {
//       delay: 100,
//     });
//     return loginPromise;
//   }).then(function(){
//     let algoWillBeclickPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]' ,page)
//     return algoWillBeclickPromise;
//   // }).then(function(){
//   //   console.log('Algo Scetion Click')
//   }).then(function(){
//     let getTowarmUpPromise = waitAndClick('input[value="warmup"]', page)
//     return getTowarmUpPromise;
//   }).then(function(){
//     let challengeArrPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', {delay : 100})
//     return challengeArrPromise
//   }).then(function(questionsArr){
//     console.log(" No of Questions" + questionsArr.length)

//     let questionWillBeSolvedPromise = questionSolver(page, questionsArr[0], codeFile.answers[0])
//   });

  // ASYNC METHOD 

 async function waitAndClick(selector, cPage){
   await cPage.waitForSelector(selector) 
        let clickModalPromise = cPage.click(selector, {delay : 100})
        return clickModalPromise
  }
//   function waitAndClick(selector, cPage){
//     return new Promise(function(resolve, reject){
//       let waitForModalPromise = cPage.waitForSelector(selector); // wait for selector by default selector
//       waitForModalPromise.then(function(){
//         let clickModalPromise = cPage.click(selector, {delay : 100})
//         return clickModalPromise
//       }).then(function(){
//         resolve()
//       }).catch(function(){
//         reject()
//       })
//     })
//   }

   // ASYNC METHOD 

    async function questionSolver(page, question, answer){
   
             await question.click()
   
             await waitAndClick(
            ".monaco-editor.no-user-select.vs",
            page
          );
       
             await  waitAndClick(".checkbox-input", page);
          
             await  page.waitForSelector(".text-area.custominput");
             await  page.type(".text-area.custominput", answer, { delay: 20 });
      
             await  page.keyboard.down('Control');
          
             await page.keyboard.press('A' , {delay : 20});
          
       
             await page.keyboard.press('X' , {delay:20})
       
             await page.keyboard.up('Control')
         
             await waitAndClick(
           ".monaco-editor.no-user-select.vs",
           page
         );
             await page.keyboard.down('Control');
             await  page.keyboard.press('A' , {delay : 20});
       
             await  page.keyboard.press('V' , {delay:20})
         
             await  page.keyboard.up('Control')
       
             await page.click('.hr-monaco__run-code' , {delay : 20})
  

  }

  console.log("After"); 




//   function questionSolver(page, question, answer){
//     return new Promise(function(resolve, reject){
//       let questionWillBeClickedPromise = question.click()
//       questionWillBeClickedPromise.then(function(){
//         //console.log('question Clicked')
//           let waitForEditorPromise = waitAndClick(
//             ".monaco-editor.no-user-select.vs",
//             page
//           );
//           return waitForEditorPromise;
//         })
//         .then(function () {
//           return waitAndClick(".checkbox-input", page);
//         })
//         .then(function () {
//           return page.waitForSelector(".text-area.custominput");
//         })
//         .then(function () {
//           return page.type(".text-area.custominput", answer, { delay: 20 });
//         })
//         .then(function () {
//           let ctrlOnHoldPressedPromise = page.keyboard.down('Control');
//           return ctrlOnHoldPressedPromise
//         }).then(function(){
//           let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
//           return AisPressedPromise
//         }).then(function(){
//            let XisPressedPromise = page.keyboard.press('X' , {delay:20})
//            return XisPressedPromise
//         }).then(function(){
//           //console.log('Cut Implemented')
//           let ctrlIsReleasedPromise = page.keyboard.up('Control')
//           return ctrlIsReleasedPromise
//        }).then(function () {
//          let waitForEditorPromise = waitAndClick(
//            ".monaco-editor.no-user-select.vs",
//            page
//          );
//          return waitForEditorPromise;
//        }).then(function () {
//          let ctrlonHoldPromise = page.keyboard.down('Control');
//          return ctrlonHoldPromise
//        }).then(function(){
//          let AisPressedPromise = page.keyboard.press('A' , {delay : 20});
//          return AisPressedPromise
//        }).then(function(){
//          let VisPressedPromise = page.keyboard.press('V' , {delay:20})
//          return VisPressedPromise
//       }).then(function(){
//        let ctrlIsReleasedPromise = page.keyboard.up('Control')
//        return ctrlIsReleasedPromise
//     }).then(function(){
//        return page.click('.hr-monaco__run-code' , {delay : 20})
//     }).then(function(){
//       resolve()
//     }).catch(function(err){
//       console.log(err)
//         });
//     });
//   }
// console.log("After"); 


