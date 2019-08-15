// var reporter = require('cucumber-html-reporter');
// let globals = require('protractor');
// let browser = globals.browser;
// var options = {
//         theme: 'bootstrap',
//         jsonFile: '/Users/iuliia/Documents/Framework/CucumberJS/cukereport.json',
//         output: '/Users/iuliia/Documents/Framework/CucumberJS/cucumber_report.html',
//         reportSuiteAsScenarios: true,
//         launchReport: true,
//         metadata: {
//             "App Version":"0.3.2",
//             "Test Environment": "STAGING",
//             "Browser": "Chrome  54.0.2840.98",
//             "Platform": "Windows 10",
//             "Parallel": "Scenarios",
//             "Executed": "Remote"
//         }
       
//     };
 
//     reporter.generate(options);
    

   var reporter = require('cucumber-html-reporter');
  //var reporter = require('multiple-cucumber-html-reporter');
 
 
var options = {
        theme: 'bootstrap',
        jsonFile: './cukereport.json',
        output: './cucumber_report.html',
     
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);