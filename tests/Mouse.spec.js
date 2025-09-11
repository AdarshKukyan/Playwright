import {test,expect} from '@playwright/test';

test('MouseAction',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

//Mouse Hover
//  const firstH= await page.locator("[class='dropbtn']")
//   const SecondH= await page.locator("//div[@class='dropdown-content']/a[text()='Laptops']")

//   await firstH.hover()
//   await SecondH.hover()
// await page.waitForTimeout(5000)

//right click
// const Double=await page.locator("[class='submit-btn']")

// Double.click({button:"right"})
// await page.waitForTimeout(5000)

//Double click
// const Double=await page.getByRole("button",{name:"Copy Text"})

// await Double.dblclick();
// const Validat=await page.locator("#field2")
//   await expect(Validat).toHaveValue("Hello World!")

    

})
