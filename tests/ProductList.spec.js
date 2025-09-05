import {test,expect } from "@playwright/test";

test('Product List',async ({page})=>{

    await page.goto('https://demoblaze.com/');

    await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const prod=await page.$$("//div[@id='tbodyid']//h4/a");
    

    for(const p of prod){
        console.log("Product Name: "+ await p.textContent());
    }


})
test('sd',async)

// let arr=[1,1,2,2,3,1]
// // output:[1,2]
// let b={}
// duplicates=[]

// arr.map(function(element){
//    if(b[element]==undefined){
//        b[element]=1
//    }else
//    {
//        b[element]=b[element]+1
//    }
// })  

// // { '1': 3, '2': 2, '3': 1 }
// for(const key in b){
//     if(b[key]>1){
//         duplicates.push(parseInt(key, 10));
//     }}

//     console.log(duplicates)



