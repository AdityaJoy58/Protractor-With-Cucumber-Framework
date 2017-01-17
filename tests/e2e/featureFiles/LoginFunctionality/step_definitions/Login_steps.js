var myStepDefinitionsWrapper = function () {

    var loginPage = require('../../../pages/loginPage');
    var homePage = require('../../../pages/homePage');
    var settings = require('../../../common/settings');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;

    this.Given(/^Instagram Application is opened with Sign Up page$/, function (callback) {
        dv.get( browser.baseUrl).then(function () {
            callback();
        });
    });

    this.When(/^User Click on Log in link/, function (callback) {
        dv.findElement(loginPage.logInLink).getText().then(function (result) {
            dv.findElement(loginPage.logInLink).click().then(function () {
                dv.findElement(loginPage.userName).isDisplayed().then(function (boolean) {
                    callback();
                });
            });
        });
    });

    this.Then(/^Enter Username and Password$/, function (callback) {
        dv.findElement(loginPage.userName).sendKeys(settings.constants.USERNAME).then(function () {
            dv.findElement(loginPage.userPassword).sendKeys(settings.constants.PASSWORD).then(function () {
                callback();
            });
        });
    });

    this.Then(/^Click on Log In button$/, function (callback) {
        dv.findElement(loginPage.logInButton).click().then(function () {
            callback();
        });
    });

    this.Then(/^Verify Login Successfully into the Instagram Application$/, function (callback) {
        dv.findElement(homePage.userSettings).isDisplayed().then(function (returnTrueFalse) {
            assert.isTrue(returnTrueFalse);
            callback();
        });
    });
};
module.exports = myStepDefinitionsWrapper;