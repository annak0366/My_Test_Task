describe ('Test', ()=> {
    it ('Test Case 4', async() =>{
        //Preconditions:
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
        
        //По тест-кейсу 5:
        //Step 1
        await $('#add-to-cart-sauce-labs-backpack').click()
        await browser.pause(2000)
        await expect($('.shopping_cart_badge')).toHaveText('1')
        await $('.shopping_cart_link').click()
        await browser.pause(2000)
        await expect($('#item_4_title_link')).toBeDisplayed()

        //Step 2
        await $('#react-burger-menu-btn').click()
        await browser.pause(2000)
        await expect($('.bm-menu')).toBeDisplayed()
        await expect($('#inventory_sidebar_link')).toBeDisplayed()
        await expect($('#about_sidebar_link')).toBeDisplayed()
        await expect($('#logout_sidebar_link')).toBeDisplayed()
        await expect($('#reset_sidebar_link')).toBeDisplayed()

        //Step 3
        await $('#logout_sidebar_link').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        const assert = require('assert');

        const inputUsername = await $('#user-name').getValue();
        await assert.equal(inputUsername.trim(), '', 'Поле вводу не є пустим')
        const inputPassword = await $('#user-name').getValue();
        await assert.equal(inputPassword.trim(), '', 'Поле вводу не є пустим')

        //Step 4
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await browser.pause(2000) 
        await $('#login-button').click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        //Step 5
        browser.pause(2000)
        await $('.shopping_cart_link').click()
        browser.pause(2000)

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect($('#item_4_title_link')).toBeDisplayed()
        browser.pause(2000)

    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case5.js