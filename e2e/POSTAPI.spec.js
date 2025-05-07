import {test,expect} from '@playwright/test'
var resid;
test.skip('post api',async ({request})=>{

const response=await request.post('https:reqres.in/api/users',
{
    data:{"name":"kumar","job":"trainer"},

    headers:{"Accept":"application/json"}
 }
);


});

test('post',async({request})=>{

const response= await request.post('https:reqres.in/api/users',

    {
data:{"name":"sree","job":"swim"},
headers:{"Accept":"application/json", "x-api-key": "reqres-free-v1"}

    }

);
console.log(await response.json());
const resp=await response.json();
resid=resp.id;
console.log("id"+resid);

});

test('update',async({request})=>{

    const response= await request.post('https:reqres.in/api/users'+resid,

        {
    data:{"name":"sreekku","job":"swim"},
    headers:{"Accept":"application/json", "x-api-key": "reqres-free-v1"}
    
        });
        console.log(await response.json());
});