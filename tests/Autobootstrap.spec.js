import {test,exepect} from "@playwright/test"

test('Auto bootstrap' , async ({page})=>{

    await page.goto('https://in.bookmyshow.com/')
    await page.locator("#dummy").fill("Delhi")
    await page.waitForSelector("//div[contains(@class,'leftListCont___9ce83f')]")
ˀ
    
    let Locator=await page.$$("//div[contains(@class,'leftListCont___9ce83f')]/div[contains(@class,'leftContent___42c26c')]")
    for(let loc of Locator)    
    {
        if(await loc.textContent()=="Delhi-NCR")
        {
            await loc.click()
            break;
        }
    }

})