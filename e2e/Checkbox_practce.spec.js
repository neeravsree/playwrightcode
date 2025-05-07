import { test,expect } from '@playwright/test';

test('checkboxtest@regression',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(await page.locator('id=sunday')).toBeVisible;
    await page.locator('id=sunday').check();
    await page.waitForTimeout(3000);

}
)