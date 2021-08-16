const puppeteer = require('puppeteer');

// self-executing function
(async () => {
  console.log('Start browser');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://us.wikipedia.org/wiki/Node.js');

  let titleH1 = await page.evaluate(() => {
    const h1 = document.getElementsByTagName('h1');
    console.log(h1.innerHTML);

    return h1.innerHTML;
  });

  console.log(titleH1);

  console.log('Close browser');
  browser.close();
  console.log('Browser closed');
})();