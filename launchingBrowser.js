import {chromium,webkit, test } from "@playwright/test";
test ('Launching Redbus',async()=>{
    let browser=await chromium.launch({channel:'msedge'})
    let context= await browser.newContext()
    let page= await context.newPage()
   
    await page.goto('https://www.redbus.in')
    console.log(await page.title());
    await page.waitForTimeout(5000)
    console.log(page.url());
    
    
});

test ('Launching Flipkart',async()=>{
    let browser=await webkit.launch({channel:'webkit'})
    let context= await browser.newContext()
    let page= await context.newPage()
    await page.goto('https://www.flipkart.com')
    console.log(await page.title() );
    await page.waitForTimeout(5000)
    console.log( page.url());
    
});