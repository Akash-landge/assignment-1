// scrape.js
const puppeteer = require('puppeteer');
const fs = require('fs');

const url = process.env.SCRAPE_URL || 'https://example.com';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(url);

  const result = await page.evaluate(() => ({
    title: document.title,
    heading: document.querySelector('h1')?.innerText || "No <h1> found"
  }));

  fs.writeFileSync('scraped_data.json', JSON.stringify(result, null, 2));

  await browser.close();
})();
