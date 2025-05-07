import {test,expect} from '@playwright/test'
//import { LoginPage } from '../e2e/FileUploadPom.spec.js';


test.skip('fileuplaod',async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator('#filesToUpload').setInputFiles("playwright-report/index.html");
    await expect(await page.locator('#fileList li')).toHaveCount(1);
    const list=await page.locator('#fileList li');
    console.log("list size"+await list.count());
    for(let i=0;i<await list.count();i++){
       console.log("fileName"+await list.nth(i).textContent());
    }



})


