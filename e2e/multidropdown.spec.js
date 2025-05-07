import {test,expect} from '@playwright/test';


test('multidropdoen',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
//multi
//await page.selectOption('#colors',['Blue','Red']); 

//single with value
//await page.locator('#colors').selectOption({value:'red'});

//select by visibletext
//await page.selectOption('#colors','Blue');
//await page.waitForTimeout(3000);

//await page.selectOption('#colors',{index:2});
//await page.waitForTimeout(3000);

const options= await page.locator('#colors option');
await expect(options).toHaveCount(7);


})