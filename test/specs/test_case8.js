
describe ('Test', ()=> {
    it ('Test Case 8', async() =>{
        //Preconditions:
        browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
      
        await browser.pause(2000) 
        await $('#login-button').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        //Step 1
        await $('#add-to-cart-sauce-labs-backpack').click()
        await browser.pause(2000)
        await expect($('.shopping_cart_badge')).toHaveText('1')

        //Step 2
        await $('.shopping_cart_link').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect($('#item_4_title_link')).toBeDisplayed()
        
        //Значення ціни
        const priceText = await browser.$('.inventory_item_price').getText()
        const price = parseFloat(priceText.replace('$', '').trim())
        console.log(price)


        //Step 3
        await $('#checkout').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')

        //Step 4
        await $('#first-name').setValue('Yulia')
        await expect($('#first-name')).toHaveValue('Yulia')
        
        //Step 5
        await $('#last-name').setValue('Garcia')
        await expect($('#last-name')).toHaveValue('Garcia')

        //Step 6
        await $('#postal-code').setValue('23408')
        await expect($('#postal-code')).toHaveValue('23408')

        //Step 7
        await $('#continue').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        await expect($('#item_4_title_link')).toBeDisplayed() 

        //Check whether the price is the same
        const priceTotalText = await browser.$('.summary_subtotal_label').getText()
        const priceTotal = parseFloat(priceTotalText.replace('Item total: $', '').trim())
        console.log(priceTotal)

        await expect(price).toBe(priceTotal)


        //Step 8
        await $('#finish').click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        
        const text = await browser.$('.complete-header').getText()
        expect(text).toBe('Thank you for your order!')

        //await expect($('.complete-header')).toBe('Thank you for your order!')

        //Step 9
        await $('#back-to-products').click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        
    

    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case8.js