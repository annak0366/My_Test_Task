
describe ('Test', ()=> {
    it ('Test Case 7', async() =>{
        //Preconditions:
        browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
      
        await browser.pause(2000) 
        await $('#login-button').click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        //Twitter button
        await $('[href="https://twitter.com/saucelabs"]').click()
        await browser.pause(2000)

        const allTabs = await browser.getWindowHandles()
        await browser.switchToWindow(allTabs[1])
        
        await expect(browser).toHaveUrl('https://twitter.com/saucelabs')

        await browser.switchToWindow(allTabs[0])
        await browser.pause(2000)


        //Facebook button
        await $('[href="https://www.facebook.com/saucelabs"]').click()
        await browser.pause(2000)
        const allTabs2 = await browser.getWindowHandles()
        await browser.switchToWindow(allTabs2[2])

        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')

        await browser.switchToWindow(allTabs[0])
        await browser.pause(2000)


        //Linkedin button
        await $('[href="https://www.linkedin.com/company/sauce-labs/"]').click()
        await browser.pause(2000)
        const allTabs3 = await browser.getWindowHandles()
        await browser.switchToWindow(allTabs3[3])

        await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
        await browser.pause(2000)

    })
})

//npx wdio run .\wdio.conf.js --spec .\test\specs\test_case7.js