/**
 * Created by ab185330 on 5/19/2016.
 */
var myStepDefinitionsWrapper = function () {

    var loginPage = require('../../../pages/loginPage');
    var settings = require('../../../common/settings');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;

    this.Given(/^Instagram application is loaded$/, function (callback) {
        dv.get(browser.baseUrl).then(function () {
            callback();
        });
    });

    this.When(/^Home page appears$/, function (callback) {
        dv.findElement(loginPage.emailTextBox).getText().then(function () {
            dv.findElement(loginPage.emailTextBox).isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Then(/^Login with Facebook button present$/, function (callback) {
        dv.findElement(loginPage.logInWithFacebookButton).getText().then(function () {
            dv.findElement(loginPage.logInWithFacebookButton).isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Then(/^SignUp button present$/, function (callback) {
        dv.findElement(loginPage.signUpButton).getText().then(function () {
            dv.findElement(loginPage.signUpButton).isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;