import {test, expect} from '@playwright/test';

test('Register page',async ({page})=>{
    await page.goto('https://demoblaze.com/');
    //Click on Sign up link
    const User='adarsh20'
    await page.click("//a[@id='signin2']")
    await page.fill("//input[@id='sign-username']",User)
    await page.fill("(//input[@id='sign-password'])[1]",'adarsh20')
    await page.click("//button[normalize-space()='Sign up']")
    page.on('dialog', async dialog => {
  // This code runs only when a dialog appears.
  // The 'dialog' object is valid here.
  expect(dialog.message()).toBe('Sign up successful.');
  await dialog.accept(); 
});



    
    // const Username=await page.locator("//a[@id='nameofuser']")
    // console.log("Username is: "+ await Username.textContent());
    // // await expect(Username).toBeVisible();
    // await expect(Username).toHaveText('Welcome ${User}');




})