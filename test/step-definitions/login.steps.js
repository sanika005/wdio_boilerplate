const loginpage = require('../pageobjects/login.page')
const homepage = require('../pageobjects/homepage.page')
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^user is on login page$/, async () => {
    await loginpage.open();
});

When (/^user enters username$/, async () => {
    await loginpage.setUsername(process.env.USERNAME1);
});

When (/^user enters password$/, async () => {
    await loginpage.setPassword(process.env.PASSWORD);
});

When (/^user clicks on login button$/, async () => {
    await loginpage.clickLogin();
});

Then (/^user should be logged in successfully and directed to the dashboard$/, async () => {
    await homepage.verifyTxtProduct("Products");
});