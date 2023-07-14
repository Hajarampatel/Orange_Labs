const puppeteer = require('puppeteer');
class Helper {

    static getProfiledBrowser = async () => {


        let options = {
            headless: false,
            ignoreHTTPSErrors: true,
            executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
       
             ignoreDefaultArgs: ["--enable-automation"],
             defaultViewport: null,
             userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"

        }
        const browser = await puppeteer.launch(options);
        return browser;
    }

  
            
}


module.exports = Helper;