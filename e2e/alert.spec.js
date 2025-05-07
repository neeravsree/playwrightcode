
import {test,expect} from '@playwright/test';

test.skip('alerte',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
 page.on('dialog',async dialog=>{
    await dialog.accept();
 });
 await page.locator('id=alertBtn').click();
 await page.waitForTimeout(5000);
})

test('alertconfirm',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
 page.on('dialog',async dialog=>{
    await expect (dialog.type()).toContain('confirm');
    await expect (dialog.message()).toContain('Press a button!')
    await dialog.accept();
 });
 await page.locator('id=confirmBtn').click();
 await page.waitForTimeout(5000);
 const text= expect (page.locator('id=demo').textContent())
 expect(text).toBe('You pressed OK!');
})