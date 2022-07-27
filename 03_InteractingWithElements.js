const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://react-redux.realworld.io/#/login");

  await page.fill('input[type = "email"]', "qacamp.acad@gmail.com");
  await page.press('input[type = "email"]', "Tab");
  await page.type('input[type = "password"]', "test12345", { delay: 500 });
  await page.click('form >> "Sign in"', { position: { x: 0, y: 0 } });
})();
