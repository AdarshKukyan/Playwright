import {test,expect} from "@playwright/test"

test('Checkbox',async ({page})=>{
//Single Check Box
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@type="checkbox" and @value="sunday"]').check()
    await expect(await page.locator('//input[@type="checkbox" and @value="sunday"]').isChecked()).toBeTruthy()

    await page.locator('//input[@type="checkbox" and @value="sunday"]').uncheck()

//MultLine Check Box

  let a=[
    "//input[@type='checkbox' and @value='sunday']",
    "//input[@type='checkbox' and @value='monday']",
    "//input[@type='checkbox' and @value='saturday']"

  ]

  for(let Mcheck of a)
  {
    // console.log(Mcheck)

    await page.locator(Mcheck).check()
  }
  await page.locator('//input[@type="checkbox" and @value="sunday"]').uncheck()
     //await page.waitForTimeout(5000)

   for(let Mcheck of a)
  {
    console.log(Mcheck)

    if( await (await page.locator(Mcheck)).isChecked()){
    await page.locator(Mcheck).uncheck()
    }
  }





    await page.waitForTimeout(5000)



    await page.close()



})