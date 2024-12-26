const { test,chromium} = require('@playwright/test');

test ('launch app', async()=>{

    const browser = await chromium.launch({
    headless: false,
    });
    const page =await browser.newPage();
    // await page.waitForTimeout(5000);
  
    const url = ('https://x.com/?lang=en');
    await page.goto(url);
    
});