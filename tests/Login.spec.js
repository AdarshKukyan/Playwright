import {test,expect} from '@playwright/test';

test('Register Page',async ({page})=>{

    await page.goto('https://demoblaze.com/');
    await page.click("//a[@id='login2']")
    const User='adarsh20'
    await page.fill("//input[@id='loginusername']",User)
    await page.fill("//input[@id='loginpassword']",'adarsh20')
    await page.click("//button[normalize-space()='Log in']")

    //Locate Welcome User
    const Username=await page.locator("//a[@id='nameofuser']")

    console.log("Username is: "+ await Username.textContent());

    await expect(Username).toBeVisible();
    await expect(Username).toHaveText('Welcome adarsh20');

   page.close();

})
