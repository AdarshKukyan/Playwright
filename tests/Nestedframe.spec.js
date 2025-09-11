import {test,exepect} from '@playwright/test'

test('Nested Frame',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')
    let fram=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await  fram.fill("input[name='mytext3']",'Poda Andavane Namma pakkam Irukan')

    let childframe=fram.childFrames()

    await childframe[0].locator('//*[@id="i6"]/div[3]/div').check()
    
     await page.waitForTimeout(5000)
    


})