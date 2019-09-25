/*jshint esversion:6*/
/*jshint esversion:8*/
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

var { Given, When, And, Then, After } = require("cucumber");
const protractorHelper = require("protractor-helper");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.use(require("chai-smoothie"));
var should = require("chai").should();
var EC = protractor.ExpectedConditions;
var PropertiesReader = require("properties-reader");

var base = require("../Pages/BasePage.js");
var dashboard = require("../Pages/DashboardPage.js");
var scheduleButton = require("../Pages/SchedulePage.js")
var customerLogin = require("../Pages/CustomerLoginPage.js");
var newSchedule = require('../Pages/NewSchedulePage.js');
var collectSamples = require('../Pages/CollectSamplesPage.js');
var prop = PropertiesReader("./property/prop.properties");
var remediation = require("../Pages/RemediationPage.js")
var expectedNameFailTP;
var actualTestPointName;

Given(/^As user I am on  Schedule details page$/, () => {
  return expect(newSchedule.elementsNewShedulePage.ScheduleId.getText()).to.eventually.equal("Schedule ID:");
});

When(/^I click the Collect samples button$/, async () => {
  return await collectSamples.elementsCollectSamplesPage.CollectSamplesButton.click();


});
Then(/^I should see the submit module$/, () => {

  protractorHelper.waitForElementVisibility(collectSamples.elementsCollectSamplesPage.SubmitSamplesModule, 5000);
  return expect(collectSamples.elementsCollectSamplesPage.SubmitSamplesModule.isDisplayed()).to.eventually.be.true;

});

When(/^I click the Submit button inside submit module I should be taken to the Schedule  page with "([^"]*)" button present$/, async (AddTestResult) => {
  

  protractorHelper.click(collectSamples.elementsCollectSamplesPage.SubmitSamplesButton, 5000);
  browser.wait(EC.textToBePresentInElement(collectSamples.elementsCollectSamplesPage.ExportLabCSVLink, 'Export Lab CSV'), 10000);
  return expect(collectSamples.elementsCollectSamplesPage.AddTestResultButton.getText()).to.eventually.contain(AddTestResult);

});
When(/^I click the Add Test Results button$/, async () => {

  await collectSamples.elementsCollectSamplesPage.AddTestResultButton.click();
  protractorHelper.waitForElementVisibility(collectSamples.elementsCollectSamplesPage.AddTestResultsPopUp, 1000);
  return expect(collectSamples.elementsCollectSamplesPage.AddTestResultsPopUp.isDisplayed()).to.eventually.be.true;
});

Then(/^I add Fail result and I should be taken to  Schedule details page and I should see the Fail result added to the given Schedule$/, async () => {
  await collectSamples.elementsCollectSamplesPage.TestResultDate.click();
  let today = new Date();
  var currentDate = today.toLocaleDateString("en-US");
  await collectSamples.elementsCollectSamplesPage.TestResultDate.sendKeys(currentDate);
  protractorHelper.tap(collectSamples.elementsCollectSamplesPage.AddTestResultToFirstRowTap,5000);
  await collectSamples.elementsCollectSamplesPage.PositiveTestResultFirstRow.click();

  var expectedNameFailTP = await collectSamples.elementsCollectSamplesPage.AddTestResultTableAllColumns.get(0).getText().then(function (name1) {
    console.log( "Expected Name of Test Point with fail result is " + name1);
    return name1;
  });

  collectSamples.elementsCollectSamplesPage.SaveButton.click();

  browser.wait(EC.textToBePresentInElement(newSchedule.elementsNewShedulePage.ScheduleId, 'Schedule ID'),50000);


    var actualTestPointName = await (collectSamples.elementsCollectSamplesPage.CompletedScheduleFirstRowTestPointName.getText()).then(function(actualname){
        console.log(" Actual Name of Test Point with failed result is " +  actualname);
        return actualname;
      });

    protractorHelper.waitForTextToBePresentInElement(collectSamples.elementsCollectSamplesPage.CompletedScheduleFirstRowResult, "Fail", 50000);
    var actualTestResult = await (collectSamples.elementsCollectSamplesPage.CompletedScheduleFirstRowResult.getText()).then(function(actualResult){
        console.log("Actual result is " + actualResult);
        return actualResult;
      });
    
     expect(expectedNameFailTP).to.contain(actualTestPointName);
     expect(actualTestResult).to.contain("Fail");
    remediation.elementsRemediationPage.TopRemediationLink.click();
  

});

