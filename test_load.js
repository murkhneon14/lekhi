const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('requestfailed', request => {
    console.log(`FAILED: ${request.url()} - ${request.failure().errorText}`);
  });
  
  page.on('response', response => {
    if (response.status() >= 400) {
      console.log(`HTTP ERROR: ${response.status()} - ${response.url()}`);
    }
  });

  page.on('console', msg => console.log(`CONSOLE [${msg.type()}]: ${msg.text()}`));

  await page.goto('http://localhost:3000/fooror.com/en-us/pricing.html');
  await page.waitForTimeout(5000); // 5 seconds to load chunks
  await browser.close();
})();
