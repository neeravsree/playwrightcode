import { test, expect } from '@playwright/test';

test('Assertion@sanity',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register') ;

    //dropdown
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#country").selectOption({label:'India'});
})