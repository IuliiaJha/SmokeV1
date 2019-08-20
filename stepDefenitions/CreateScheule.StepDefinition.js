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
var prop = PropertiesReader("./property/prop.properties");

Given(/^As user I am on a Dashboard Page$/, async () => {
  return await browser.get('https://staging.controlpro.corvium.com')
})
When(/^I found the "([^"]*)" Link$/, async function (expectedLinkText) {
  //protractorHelper.waitForElementVisibility(dashboard.elementsHomePage.ScheduleLink);
  await dashboard.elementsHomePage.ScheduleLink.getText().then(function(text){
    console.log(text);
  })
return  expect (dashboard.elementsHomePage.ScheduleLink.getText()).to.eventually.equal(expectedLinkText)
})
When(/^I click the Schedule link$/, async () => {
  return await browser.actions().mouseMove(dashboard.elementsHomePage.ScheduleLink).click().perform();
});

Then(/^I should be taken to the Schedule  page with "([^"]*)" button present$/, async  (buttonText) => {
protractorHelper.waitForTextToBePresentInElement(scheduleButton.elementsShedulePage.addScheduleButton, 'Add Schedule');
 scheduleButton.elementsShedulePage.addScheduleButton.getText().then(function (text1) {
    console.log(text1)
  })
return expect (scheduleButton.elementsShedulePage.addScheduleButton.getText()).to.eventually.equal('buttonText')
})
