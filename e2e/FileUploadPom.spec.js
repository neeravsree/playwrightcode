exports.LoginPage=
class LoginPage{

    constructor(page){
        this.page=page;
this.fileUpoad='#filesToUpload';
    }

    async goToFileUpload(){
            await this.page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
            await this.page.locator(this.fileUpoad).setInputFiles("playwright-report/index.html");
            await expect(await this.page.locator('#fileList li')).toHaveCount(1);
            const list=await this.page.locator('#fileList li');
            console.log("list size"+await list.count());
            for(let i=0;i<await list.count();i++){
               console.log("fileName"+await list.nth(i).textContent());
            }
        

    }
}