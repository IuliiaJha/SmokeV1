/*jshint esversion:6*/
/*jshint esversion:8*/
var {setDefaultTimeout} = require('cucumber');
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
var newSchedule = require('../Pages/NewSchedulePage.js')
var prop = PropertiesReader("./property/prop.properties");

Given(/^As user I am on  Dashboard Page$/, async () => {
  return await browser.get(prop.get('baseUrl'));
});
When(/^I found the "([^"]*)" Link$/, async function (expectedLinkText) {
  await dashboard.elementsHomePage.ScheduleLink.getText().then(function (text) {
    console.log(text);
  });
  return expect(dashboard.elementsHomePage.ScheduleLink.getText()).to.eventually.equal(expectedLinkText)
});
When(/^I click the Schedule link$/, async () => {
  return await browser.actions().mouseMove(dashboard.elementsHomePage.ScheduleLink).click().perform();
});

Then(/^I should be taken to the Schedule  page with "([^"]*)" button present$/, async (buttonText) => {
  protractorHelper.waitForTextToBePresentInElement(scheduleButton.elementsShedulePage.addScheduleButton, 'Add Schedule');
  scheduleButton.elementsShedulePage.addScheduleButton.getText().then(function (text1) {
    console.log(text1);
  });
  return expect(scheduleButton.elementsShedulePage.addScheduleButton.getText()).to.eventually.equal(buttonText);
});

Given(/^As a user I am on the Schedule page$/, async () => {

  await browser.get(prop.get('schedulePageUrl'));
  protractorHelper.waitForTextToBePresentInElement(scheduleButton.elementsShedulePage.addScheduleButton, 'Add Schedule');
  return expect(scheduleButton.elementsShedulePage.addScheduleButton.getText()).to.eventually.equal("Add Schedule");
});

When(/^I Click the ADD Schedule button$/, async () => {
  return await scheduleButton.elementsShedulePage.addScheduleButton.click();
});
Then(/^"([^"]*)" module should appear$/, async (modalName) => {
  await protractorHelper.waitForTextToBePresentInElement(newSchedule.elementsNewShedulePage.NewScheduleModal, modalName);
  return expect(newSchedule.elementsNewShedulePage.NewScheduleModal.getAttribute('textContent')).to.eventually.equal(modalName);
});
Then(/^I should be able to select Test Method$/, async () => {
 
  await protractorHelper.tap(newSchedule.elementsNewShedulePage.TestMethodButton);
  browser.wait(EC.presenceOf(newSchedule.elementsNewShedulePage.TestMethodDropdown), 5000);
   newSchedule.elementsNewShedulePage.TestMethodDropdown.each(function(element){
    element.getAttribute('textContent').then(async function(text){
      if (text.trim()!=='Sample6 DETECT/L'){
        await browser.actions().mouseMove(element.getWebElement()).click().perform();
        return  false;
      }
    });
  });
 return newSchedule.elementsNewShedulePage.TestMethodButton.getAttribute('textContent').then(function (text1) {
            console.log("Method is " + text1.trim());
});
});

Then(/^I should be able to find Test Points$/, async () =>{
  
  return await newSchedule.elementsNewShedulePage.FindTestPointsButton.click();
 
});

Then(/^I should be able to select  Test Points randomly$/,{timeout: 2 * 5000}, async () => {
protractorHelper.waitForElementVisibility(newSchedule.elementsNewShedulePage.TestPointsResultsContainer,50000);
await expect (newSchedule.elementsNewShedulePage.TestPointsResultsContainer.isDisplayed()).to.eventually.be.true;
await browser.actions().mouseMove(newSchedule.elementsNewShedulePage.RandomizeButton).click().perform(); 
await browser.actions().mouseMove(newSchedule.elementsNewShedulePage.RandomizeGoButton).click().perform();
await browser.actions().mouseMove(newSchedule.elementsNewShedulePage.SaveScheduleButton).click().perform();
browser.wait(EC.textToBePresentInElement(newSchedule.elementsNewShedulePage.ScheduleId, 'Schedule ID'), 10000);
return expect(newSchedule.elementsNewShedulePage.ScheduleId.getText()).to.eventually.equal ("Schedule ID:");

});


