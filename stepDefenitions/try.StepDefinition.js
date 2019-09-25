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



Given(/^As user$/, async function A () {
  await base.go();
  await customerLogin.Login();
  await browser.get(prop.get('openSchedulePageUrl'));
  protractorHelper.waitForTextToBePresentInElement(scheduleButton.elementsShedulePage.addScheduleButton, 'Add Schedule');
  await $$('div[title]').each(function (element) {
      element.getAttribute('title').then(async function (text) {
        if (text.trim() == 'Scheduled' ) {
          await browser.actions().mouseMove(element.getWebElement()).click().perform();
          return false;
        }
      });
    });
    await browser.wait(EC.textToBePresentInElement(newSchedule.elementsNewShedulePage.ScheduleId, 'Schedule ID'), 5000);
    await browser.actions().mouseMove(collectSamples.elementsCollectSamplesPage.CollectSamplesButton).click().perform();
  protractorHelper.waitForElementVisibility(collectSamples.elementsCollectSamplesPage.SubmitSamplesModule, 2000);
  return browser.wait(EC.textToBePresentInElement(collectSamples.elementsCollectSamplesPage.ExportLabCSVLink, 'Export Lab CSV'), 5000);
  });