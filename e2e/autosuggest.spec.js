import {test,expect} from '@playwright/test'

test('autosuggest',async({page})=>{

    await page.goto("https://www.redbus.in");
    await page.waitForSelector('#src');
    await page.locator('id =src').fill('Del');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]//div//text[1]");
   const options= await page.$$("//li[contains(@class,'sc-iwsKbI')]//div//text[1]");
   for(let o of options){
   if(await o.textContent()==='Delhi'){
    o.click();
   }
   }

})