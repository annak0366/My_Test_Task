
describe ('Test', ()=> {
    it ('Test Case 1', async() =>{
        browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await expect($('#user-name')).toHaveValue('standard_user')

        await $('#password').setValue('secret_sauce')
        await expect($('#password')).toHaveValue('secret_sauce')
        await expect($('#password')).toHaveAttribute('type', 'password')
        

        await browser.pause(2000);

        
        await $('#login-button').click()
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        
        await browser.pause(2000);
    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case1.js



        // const passwordField = await $('#password')
        // await passwordField.setValue('secret_sauce')
        // await browser.pause(1000);
        // const passwordFieldValue = await passwordField.getValue()
        // await expect(passwordFieldValue === 'huhhuhuhguc'.repeat('secret_sauce'.length))