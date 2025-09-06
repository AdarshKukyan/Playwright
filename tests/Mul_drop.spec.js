import {test,expect} from '@playwright/test'
import { exec } from 'child_process'

test('Mul dropdown',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.locator("#colors").selectOption(["White","Green"])

    //assertion

//    let Loc= await page.locator("#colors option")
//    await expect(Loc).toHaveCount(7)

// let loc= await page.$$("#colors option")
// await expect(loc.length).toBe(7)




// const loc1=await page.locator("#colors").textContent()
// expect(loc1.includes('White')).toBeTruthy()

const loc2 =await page.$$("#colors")
let f=false
for(const option of loc2)
{
    if((await option.textContent()).trim()==='White')
    {f=true;
        break;}
        
}
console.log(f)
// expect(Options.includes('India')).toBeTruthy(



   
    
}
)