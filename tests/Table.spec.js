import {test,expect} from '@playwright/test'

test('Table',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')
    //get the count of rows and colums do assertion
    await page.waitForSelector("#productTable")
    let Tabledata=await page.locator('#productTable')
    let Rows=await Tabledata.locator('tbody tr')//Extract the rows
    let Columns=await Tabledata.locator('thead tr th')
    // console.log(await Columns.count())
    // console.log(await Rows.count())

    await expect(await Columns.count()).toBe(4)
    await expect(await Rows.count()).toBe(5)
    


    //select multiple check boxes //Create a function so that we can select multiple check boxes
    // Selectbox(Rows,page,'Smartphone')
    //  Selectbox(Rows,page,'Smartwatch')
    //  Selectbox(Rows,page,'Wireless Earbuds')
    //      await page.waitForTimeout(5000)
    


    //print all the data from pagination
     const pagination=page.locator('#pagination li a')
      console.log(await pagination.count())
    
       for(let p=0;p<await pagination.count();p++)
        {
            if(p>0)
            {
               await  pagination.nth(p).click()
            }
           for(let r=0;r<await Rows.count();r++)
     {
        let row=await Rows.nth(r)
        let tds=await row.locator('td')
        for(let c=0;c<await tds.count()-1;c++){
          console.log(await tds.nth(c).textContent())

        }

     }

       } 

})

async function Selectbox(Rows,page,productName){

let filteredData=Rows.filter({
        has: page.locator('td'),
        hasText: productName } )

    await filteredData.locator('input').check()
}