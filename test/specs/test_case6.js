
describe ('Test', ()=> {
    it ('Test Case 6', async() =>{
        //Preconditions:
        browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
      
        await browser.pause(2000) 
        await $('#login-button').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')


        //Sorting - price low to high
        await $('.product_sort_container').click()
        await browser.pause(2000)

        await $('option[value="lohi"]').click()
        await browser.pause(2000)

        const priceElements = await browser.$$('.inventory_item_price')
        const prices = []
        for (const elem of priceElements) {
            const priceText = await elem.getText()
            const price = parseFloat(priceText.replace('$', '').trim())
            prices.push(price)
        }
        for (let i=1; i< prices.length; i++) {
            expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1])
        }

        console.log(prices)

        
        //Sorting - price high to low
        await $('.product_sort_container').click()
        await browser.pause(2000)

        await $('option[value="hilo"]').click()
        await browser.pause(2000)

        const priceElements2 = await browser.$$('.inventory_item_price')
        const prices2 = []
        for (const elem of priceElements2) {
            const priceText2 = await elem.getText()
            const price2 = parseFloat(priceText2.replace('$', '').trim())
            prices.push(price2)
        }
        for (let i=1; i< prices2.length; i++) {
            expect(prices2[i]).toBeLessThanOrEqual(prices2[i - 1])
        }
        console.log(prices2)


        //Soring Name (A to Z)
        await $('.product_sort_container').click()
        await browser.pause(2000)

        await $('option[value="az"]').click()
        await browser.pause(2000)

        const itemElements = await browser.$$('inventory_item_name')
        const names = []
        for (const elem of itemElements) {
            const name = await elem.getText()
            names.push(name)
        }

        for (let i = 1; i < names.length; i++) {
            expect(names[i]).toBeGreaterThanOrEqual(names[i - 1]);
        }


        //Sorting Name (Z to A)
        await $('.product_sort_container').click()
        await browser.pause(2000)

        await $('option[value="za"]').click()
        await browser.pause(2000)

        const itemElements2 = await browser.$$('inventory_item_name')
        const names2 = []
        for (const elem of itemElements2) {
            const name2 = await elem.getText()
            names2.push(name2)
        }

        for (let i = 1; i < names2.length; i++) {
            expect(names2[i]).toBeLessThanOrEqual(names[i - 1]);
        }


    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case6.js