/**
 * Created by ab185330 on 4/26/2016.
 */

var loginPage = {
    emailTextBox: by.css('[name="email"]'),
    fullNameTextBox: by.css('[name="fullName"]'),
    logInWithFacebookButton: by.css('[class="coreSpriteFacebookIconInverted _a0z3x"]'),
    signUpButton: by.css('[class="_aj7mu _taytv _ki5uo _o0442"]'),
    logInLink: by.linkText("Log in"),
    userName: by.name("username"),
    userPassword: by.name("password"),
    logInButton: by.css("button._aj7mu._taytv._ki5uo._o0442")

};
module.exports = loginPage;
