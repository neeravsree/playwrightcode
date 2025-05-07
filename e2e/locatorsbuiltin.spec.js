const {test,expect}= require('@playwright/test');

test('Locators',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html') ;
   
    //const logoutlink=await page.locator("//a[normalize-space()='Log out");
    //await expect(logoutlink).toBeVisible();
    page.close();
    })