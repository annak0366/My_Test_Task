
describe ('Test', ()=> {
    it ('Test Case 9', async() =>{
        //Preconditions:
        browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
      
        await browser.pause(2000) 
        await $('#login-button').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        //Step 1
        await $('.shopping_cart_link').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')

        //Step 2
        await $('#checkout').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect($('h2')).toHaveTextContaining('Cart is empty')


    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case9.js