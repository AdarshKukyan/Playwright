import {test,expect} from "@playwright/test"




test('Handel input Box',async({page})=>
 {
   await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    // await page.waitForSelector("//input[@id='username']")
   // Locate an input field by its accessible label (e.g., "Username"// Locate the Username input box by its visible label text and fill it
    let InputUser = page.locator('#username')
   await expect(InputUser).toBeVisible()
   await expect(InputUser).toBeEmpty()
   await expect(InputUser).toBeEditable()
   await expect(InputUser).toBeEnabled()
   await InputUser.fill("adarsh")
   await page.waitForTimeout(5000)
   page.close()

})

