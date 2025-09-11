import {test,exepect} from '@playwright/test'

test('Frame',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Count of the frame
  let count=  await page.frames()
  console.log(count.length)

  //Locate frome using  URL
//   let Fram=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
//   await Fram.fill("input[name='mytext1']",'adarsh')

//   await page.waitForTimeout(5000)

  //Locate using name
// let Fram=await page.frame('name');



})