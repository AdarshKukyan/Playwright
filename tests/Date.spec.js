import {test,expect} from '@playwright/test'
import { Console } from 'console'

test('Date',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //Using Fill methode
    // await page.fill('#datepicker','10/12/2025')
    // await page.waitForTimeout(5000)

    //Using For Loop
let month="October"
let year="2025"
let Date="18"
await page.locator('#datepicker').click()
while(true)
{
let CurreMonth=await page.locator("[class='ui-datepicker-month']").textContent()
let CurrYear=await page.locator("[class='ui-datepicker-year']").textContent()
    if(CurreMonth==month && CurrYear==year)
    {
        let dates=await page.$$("[class='ui-datepicker-calendar'] tbody tr td")
        // console.log(dates[0])
        for(let date of await dates)
        {
            if(await date.textContent()==Date)
            {
                 await date.click()
                 await page.waitForTimeout(5000)
            }
            

        }
        break;
    }
    await page.locator("[class='ui-icon ui-icon-circle-triangle-e']").click()

}

    
})

