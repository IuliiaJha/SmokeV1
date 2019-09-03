/*jshint esversion:6*/
/*jshint esversion:8*/

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
var customerLogin = require("../Pages/CustomerLoginPage.js");
var prop = PropertiesReader("./property/prop.properties");


Given(/^As an existing user I go to login Page$/, async () => {


  base.go();
});

When(/^I found the title as "([^"]*)"$/, async (expectedTitle) => {
  let actualTitle = await base.gettitle();

  console.log(actualTitle);

  return expect(actualTitle).equal(expectedTitle);

});


When(/^I enter valid userName and password and click the Sign In button$/, async () => {
  return customerLogin.Login();
});

When(/^I found the Login form and "([^"]*)" button$/, async (SigninButton) => {
  expect(customerLogin.elementsCustomerLoginPage.LoginForm.isDisplayed()).to.eventually.be.true;
  await customerLogin.elementsCustomerLoginPage.SignInButton.getText().then(function (text) {
    console.log(text);
  });
  expect(customerLogin.elementsCustomerLoginPage.SignInButton.getText()).to.eventually.equal(SigninButton);
});

Then(/^I should be taken on the users home page$/, async () => {

  await base.Validatetitle("Corvium");
  


});

