
describe ('Test', ()=> {
    it ('Test Case 4', async() =>{
        browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        //await expect($('#user-name')).toHaveValue('standard_user')
        await $('#password').setValue('secret_sauce')
        //await expect($('#password')).toHaveValue('secret_sauce')
        //await expect($('#password')).toHaveAttribute('type', 'password')
        await browser.pause(2000) 
        await $('#login-button').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        //await browser.pause(2000)

        //По тест кейсу 4:
        await $('#react-burger-menu-btn').click()
        await browser.pause(2000)
        
        await expect($('.bm-menu')).toBeDisplayed()
        await expect($('#inventory_sidebar_link')).toBeDisplayed()
        await expect($('#about_sidebar_link')).toBeDisplayed()
        await expect($('#logout_sidebar_link')).toBeDisplayed()
        await expect($('#reset_sidebar_link')).toBeDisplayed()

        await $('#logout_sidebar_link').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        //Перевіряємо чи поля - пусті
        const assert = require('assert');

        const inputUsername = await $('#user-name').getValue();
        await assert.equal(inputUsername.trim(), '', 'Поле вводу не є пустим')

        const inputPassword = await $('#user-name').getValue();
        await assert.equal(inputPassword.trim(), '', 'Поле вводу не є пустим')
        

    })
})



//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case4.js