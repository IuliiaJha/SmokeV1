var {Given,When, Then, Before,BeforeAll, After, AfterAll} = require ('cucumber')

//   BeforeAll (function(){
// console.log ("BeforeAll hook")
//   });  
  
//   AfterAll (function(){
//     console.log ("AfterAll hook")
//   });

//   Before (function(){
//     console.log ("Before hook")
//       });

  


After(function(scenarioResult)
 {let self = this;

if(scenarioResult.result.status === 'failed'){
return browser.takeScreenshot()
.then(function (screenshot) {
    const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
      self.attach(decodedImage, 'image/png');
      console.log("scenarioResult  = ",scenarioResult.result.status);
  });
  }
});
  
