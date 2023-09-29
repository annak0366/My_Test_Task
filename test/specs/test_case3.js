
describe ('Test', ()=> {
    it ('Test Case 3', async() =>{
        browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('Standar5_user')
        await expect($('#user-name')).toHaveValue('Standar5_user')

        await $('#password').setValue('secret_sauce')
        await expect($('#password')).toHaveValue('secret_sauce')
        await expect($('#password')).toHaveAttribute('type', 'password')
        

        await browser.pause(2000);


        await $('#login-button').click()
        await browser.pause(2000);

        //Очікування після натискання
        await expect($('svg.error_icon')).toBeDisplayed()
        await expect($('h3')).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
        
        await browser.pause(2000);
    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case3.js