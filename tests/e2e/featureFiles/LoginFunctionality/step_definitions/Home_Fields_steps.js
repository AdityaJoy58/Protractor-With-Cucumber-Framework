/**
 * Created by ab185330 on 5/19/2016.
 */
var myStepDefinitionsWrapper = function () {

    var loginPage = require('../../../pages/loginPage');
    var settings = require('../../../common/settings');
    var chai = require(settings.constants.CHAI);
    this.setDefaultTimeout(settings.config.STEPTIMEOUT);
    var assert = chai.assert;

    this.Then(/^Email field present$/, function (callback) {
        dv.findElement(loginPage.emailTextBox).getText().then(function () {
            dv.findElement(loginPage.emailTextBox).isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Then(/^Full Name field present$/, function (callback) {
        dv.findElement(loginPage.fullNameTextBox).getText().then(function () {
            dv.findElement(loginPage.fullNameTextBox).isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Then(/^Username field present$/, function (callback) {
        dv.findElement(loginPage.userName).getText().then(function () {
            dv.findElement(loginPage.userName).isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });

    this.Then(/^Password field present$/, function (callback) {
        dv.findElement(loginPage.userPassword).getText().then(function () {
            dv.findElement(loginPage.userPassword).isDisplayed().then(function (result) {
                assert.isTrue(result);
                callback();
            });
        });
    });
};
module.exports = myStepDefinitionsWrapper;