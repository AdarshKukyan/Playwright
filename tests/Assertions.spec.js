import {test,expect} from "@playwright/test";
import { checkPrime } from "crypto";

test("Assertions",async ({page})=>{
   await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

   //URL check
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

   //Title check
   await expect(page).toHaveTitle('nopCommerce demo store. Register')

   //Visibility check
   await expect(page.locator("//strong[normalize-space()='Your Personal Details']")).toBeVisible();

   //To Be enabled or disabled
   let RadioEn=await page.locator("#small-searchterms")
   await expect(RadioEn).toBeEnabled()

    //To be checked or unchecked

   await expect(await page.locator("#Newsletter")).toBeChecked();

    //To be checked whether element have attribute.

    await expect(await page.locator("#gender-male")).toHaveAttribute("type","radio")

    //have a Text

   await expect(await page.locator(".page-title")).toHaveText("Register")

    //Contain
   await expect(await page.locator(".page-title")).toContainText("Regi")

    //Have Value
    let value=await page.locator("#FirstName")
    value.fill("adarsh")
    await expect(value).toHaveValue("adarsh")

    //Count
    let count=await page.locator("#customerCurrency option")
    await expect(count).toHaveCount(2)

   



    })