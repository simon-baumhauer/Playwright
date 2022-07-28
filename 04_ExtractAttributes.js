const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://react-redux.realworld.io/#/login");
  await page.fill('input[type="email"]', "qacamp.acad@gmail.com");
  await page.press('input[type="email"]', "Tab");
  await page.type('input[type="password"]', "test12345");
  await page.click('form >> "Sign in"');

  await page.waitForTimeout(5000);

  const logoText = await page.$eval(".navbar-brand", (el) => el.innerText);
  console.log("logoText:" + logoText);

  const logoHref = await page.$eval(".navbar-brand", (el) => el.href);
  console.log("logoHref:" + logoHref);

  const popularTagCount = await page.$$eval(".tag-default", (el) => el.length);
  console.log("popularTagsCounts:" + popularTagCount);

  const content = await page.textContent(".navbar-brand");
  console.log("content:" + content);

  const text = await page.innerText(".navbar-brand");
  console.log("text:" + text);

  const html = await page.innerHTML(".feed-toggle");
  console.log("html:" + html);

  const href = await page.getAttribute(".navbar-brand", "href");
  console.log("href:" + href);

  await browser.close();
})();
