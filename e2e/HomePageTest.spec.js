const {test,expect}= require('@playwright/test');

test('Home Page',async({page})=>{
await page.goto('https://www.demoblaze.com/index.html') ;
var title=await page.title();
await expect(page).toHaveTitle('STORE');
await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
page.close();
})