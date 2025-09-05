import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html#carouselExampleIndicators');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('adarsh20');
  await page.locator('#loginpassword').fill('adarsh20');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Welcome adarsh20' }).click();
});