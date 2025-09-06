import {test,expect} from "@playwright/test"

test('Drop down',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#country").selectOption("China")

    // await page.waitForTimeout(5000)
//using Locator
//  const Options=await page.locator("#country option")
//  await expect(Options).toHaveCount(10)


//It will select and return the value into array
// const Options=await page.$$("#country option")
// await expect(Options.length).toBe(10)

//Using assertion checking India is preset in Locator drop down
// const Options= await page.locator('#country').textContent()
// expect(Options.includes('India')).toBeTruthy()


// for(const option of Options)
//     {
//    if((await option.textContent()).trim()=='India')
//   {
    
//     Flag=true;
//     console.log(`Inside the ${await option.textContent()} and flage is ${Flag}`)
//     break;
    
//   }
// }})  

// const Element=(await Options.textContent()).trim();

// .every(element => Ver.includes(element))


//Checking every element in ver variable present in Drop down
const Options=await page.$$("#country option")
let Ver=["India","China","Mysore"]

let EmptArr=[]
for (let a of Options)
    {
   EmptArr.push((await a.textContent()).trim()) 
}


let lag=Ver.every(element => EmptArr.includes(element))

console.log(lag)


})


