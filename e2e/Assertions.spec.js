import { test, expect } from '@playwright/test';

test('hard Assertion',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register') ;

    //radio button clickable 
    const gm=page.locator('#gender-male');
    await page.click('#gender-male');
    await expect(gm).toBeChecked();

})

test('soft Assertion',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register') ;

    //radio button clickable 
    const gm=page.locator('#gender-male');
    await page.click('#gender-male');
    await expect.soft(gm).toBeChecked();

})