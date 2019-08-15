var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./property/prop.properties');
const protractorHelper = require("protractor-helper");
const EC = protractor.ExpectedConditions;
module.exports = {
    elementsCustomerLoginPage: {
        LoginForm: element(by.id('loginForm')),
       // SignInButton: element(by.buttonText('Sign in')),
        //SignInButton: element(by.xpath('//*[@id="loginForm"]/button')),
        SignInButton: $('#loginForm > button'),
        UsernameInputBox: $('#loginForm > input:nth-child(2)'),
        PasswordInputBox: $('#loginForm > input:nth-child(3)'),
       
      
      
    },

    Login:  async function ()  {

    var elements = this.elementsCustomerLoginPage;
 
await elements.UsernameInputBox.sendKeys(prop.get('username'))
await elements.PasswordInputBox.sendKeys(prop.get('password'))
return await browser.actions().mouseMove(elements.SignInButton).click().perform();
 
    }

}
