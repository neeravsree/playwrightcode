import {test,expect} from '@playwright/test'

test('table test',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table=await page.locator('#productTable');
const columns=await table.locator('thead tr th');
console.log('column count'+await columns.count());
const rows=await table.locator('tbody tr');
console.log('rows count'+await rows.length)
//rows.filter({
    //has:page.locator('td'),
   // hasText:2000
//})
for (let i=0;i<await rows.count();i++)
{
    const row=rows.nth(i);
    const tds=row.locator('td');
    for(let j=0;j<await tds.count()-1;j++){
       console.log(await tds.nth(j).textContent());

    }
}
})