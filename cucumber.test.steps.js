const { Given, When, Then } = require('cucumber');


Given(/^User is located on the main page of saucedemo website$/, async () => {
    
    await browser.url('https://www.saucedemo.com/')
});


When(/^User clicks the "([^"]*)" button$/, async () => {

    await $('#login-button').click()
});


Then(/^User should see the "([^"]*)" error message$/, async () => {

    await $('.error-button').toHaveTextContaining('Epic sadface: Username is required')
});
