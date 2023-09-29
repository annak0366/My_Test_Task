
describe ('Test', ()=> {
    it ('Test Case 2', async() =>{
        browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await expect($('#user-name')).toHaveValue('standard_user')

        await $('#password').setValue('wecccd44')
        await expect($('#password')).toHaveValue('wecccd44')
        await expect($('#password')).toHaveAttribute('type', 'password')
        

        await browser.pause(2000);


        await $('#login-button').click()
        await browser.pause(2000);

        //Що очікуємо після натискання:
        await expect($('svg.error_icon')).toBeDisplayed()
        await expect($('h3')).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
        
        await browser.pause(2000);
    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case2.js