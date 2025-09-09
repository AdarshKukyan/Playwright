// import {test,exepect} from "@playwright/test"

// test('Hidden' , async ({page})=>{

//     await page.goto("https://www.redbus.in/")

//     await page.waitForTimeout(5000)

//     await page.click("//div[normalize-space()='From']")
//     await page.locator("#srcDest").fill("Banglore")

//     await page.waitForSelector("div[role='heading']:has-text('Bangalore')")
    
//     let Loc=await page.$$("//div[@class='searchCategory___993266'][1]/div[contains(@class,'listItem___9a15c0')]")
//     for(let option of Loc)
//     {
//         console.log(await option.textContent())
//     }
 



// })
import {test, expect} from "@playwright/test";

test('Redbus hidden dropdown', async ({page}) => {
    await page.goto("https://www.redbus.in/");

    // Use a robust locator for the 'From' input field by its placeholder text
    await page.click("//div[normalize-space()='From']")
    await page.locator("#srcDest").fill("Banglore")

    // This locator targets the dynamic suggestions section
    const dynamicSuggestions = await page.locator("div[class*='searchCategory'] >div[role='option']> div[class*='leftListCont']> div[class*='leftContent']> div[role='heading']").allTextContents();
    
    // Log the dynamically loaded text to confirm
    console.log(dynamicSuggestions);

    // Assert that a specific dynamic city is present
    await expect(dynamicSuggestions).toContain("Madiwala, Bangalore");
});