import {test,expect} from '@playwright/test'

test('Radio handler',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    await page.waitForSelector('[value="standard"]')
   let Radio=page.locator('[value="standard"]')

    await Radio.check()

    await expect(Radio).toBeChecked()

    let FRadio=page.locator('[value="express"]')
     expect(await FRadio.isChecked()).toBeFalsy()

})

