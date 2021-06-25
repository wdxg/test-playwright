const { chromium, firefox, webkit } = require('playwright');

// function delaySecond(env, seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// }

const safariExePath = "/Applications/Safari.app/Contents/MacOS/Safari";
const chromeExePath = "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome";
(async () => {
  // const browser = await webkit.launch({headless: false, executablePath:safariExePath});
  const browser = await webkit.launch({headless: false, executablePath:chromeExePath});
  // const page1 = await browser.newPage();
  // await page1.goto('https://www.google.com');
  // await page.waitForTimeout(1000);
  const context = await browser.newContext();
  const page2 = await context.newPage();
  await page2.goto('https://mail.google.com');
  // other actions...
  await page.waitForTimeout(50000);
  // await browser.close();
})();