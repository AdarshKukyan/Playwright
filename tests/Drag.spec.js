import {test,expect} from '@playwright/test'


test('Drag',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //Sourec and destination

    const SourceE=await page.locator("#draggable")
    const DestinationE=await page.locator("#droppable")

    await SourceE.dragTo(DestinationE)
    await expect(await page.locator("#droppable p")).toHaveText("Dropped!")

    await page.waitForTimeout(5000)


    



    
})

