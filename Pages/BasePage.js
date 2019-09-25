/*jshint esversion:6*/
/*jshint esversion:8*/
var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./property/prop.properties');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports ={

go:function(){
   
    return browser.get(prop.get('baseUrl'));
   

},
gettitle: function (){
return browser.getTitle(); 
},

Validatetitle: async function (expectedTitle ) {
let actualTitle = await browser.getTitle();
console.log(actualTitle);
return expect(actualTitle).equal(expectedTitle);
}



};