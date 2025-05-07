import { test, expect } from '@playwright/test';


test('handleradiobutton',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register') ;

    //radio button clickable 
    const gm=page.locator('#gender-male');
    await page.check('#gender-male');
    await expect(gm).toBeChecked();


});

