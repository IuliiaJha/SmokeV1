/*jshint esversion:6*/
/*jshint esversion:8*/
var {Given,When, Then, Before,BeforeAll, After, AfterAll} = require ('cucumber');

  


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

// After ( async function(){
//   //  await browser.executeScript('window.sessionStorage.clear();');
//   //   await  browser.executeScript('window.localStorage.clear();');
//   await console.log ('YyYYYYYYYYYYY')
//   });
// });

});
