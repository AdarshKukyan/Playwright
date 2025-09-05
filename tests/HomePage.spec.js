import {test, expect} from '@playwright/test';
    
test('Home Page',async (page)=>{

    await page.goto('https://demoblaze.com/');

    let title=page.title();
    console.log("Title is: "+ title);
})

{
let a;

console.log(a)
}