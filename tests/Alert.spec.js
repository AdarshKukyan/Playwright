import {test,expect} from '@playwright/test'

test.skip('Alert validation1',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    
    page.on('dialog',async dialog=>{

        console.log(dialog.type())
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })

    await page.click("#alertBtn")

})
test.skip('Alert validation2',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    
    page.on('dialog',async dialog=>{

        // console.log(dialog.type())
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss()

    })

    await page.click("#confirmBtn")
    let t1=await page.locator("#demo")
    console.log(t1)
    await expect(t1).toHaveText("You pressed Cancel!")
    
})

test('Alert validation3',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    
    page.on('dialog',async dialog=>{

        console.log(dialog.type())
        expect(dialog.type()).toContain('prompt')
        expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept("Adarsh")

    })

    await page.click("#promptBtn")  
    await expect(page.locator("#demo")).toHaveText("Hello Adarsh! How are you today?")
    
    
})
