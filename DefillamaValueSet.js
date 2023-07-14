const puppeteer = require("puppeteer");
const Helper = require("./utils/helper");

class Defillama {
  static async setValue() {
    let browser = await Helper.getProfiledBrowser();

    let [page] = await browser.pages();
    
    // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    //let page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);

    try {
      await page.goto("https://swap.defillama.com", { timeout: 0 });
      await page.waitForNavigation();
      await page.type("#react-select-2-input", "Arbitrum One");
      await page.keyboard.press("Enter");
    } catch (error) {
      console.log("Error in Choosing Arbitrum One");
    }
    await page.waitForTimeout(1000);
    try {
      await page.click("div:nth-child(1) > div.css-1k491an > div > input");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Backspace");
      await page.type("div:nth-child(1) > div.css-1k491an > div > input", "12");
    } catch (error) {
      console.log("Error in settin value 12");
    }

    try {
      await page.waitForTimeout(1000);
      await page.click("div:nth-child(1) > div.css-1k491an > button");
      await page.waitForTimeout(1000);
      await page.type("div:nth-child(2) > input", "WBTC");
      await page.waitForTimeout(1000);
      await page.click("div:nth-child(1) > div > p > span");
    } catch (error) {
      console.log("Error  while selecting You Sell value to WBTC");
    }

    try {
      await page.click(" div:nth-child(3) > div.css-1k491an > button");
      await page.waitForTimeout(1000);
      await page.type("div:nth-child(2) > input", "USDC");
      await page.waitForTimeout(1000);
      await page.click("div:nth-child(2) > div > p > span");
    } catch (error) {
      console.log("Error  while selecting You Buy value to USDC");
    }

    try {
      await page.waitForSelector("div.sc-55ee4011-2.fcGAPg > div:nth-child(5)");
      await page.waitForTimeout(1000);
      await page.click("div.sc-55ee4011-2.fcGAPg > div:nth-child(5)");
    } catch (error) {
      console.log("Error in Click on 2nd option");
    }
  }
}

module.exports = Defillama;
