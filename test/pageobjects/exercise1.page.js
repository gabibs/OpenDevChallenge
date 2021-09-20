const Page = require('./page');
const url = require('url');
const path = require('path');
const checkExistsWithTimeout = require('../utils/utils');
const testData = require('../testData.json');
const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Exercise1 extends Page {
    /**
     * define selectors using getter methods
     */
    //get searchGoogleImages() { return $('//a[@data-pid="2"]') };
    get searchInputField() { return $('//input[@class="gLFyf gsfi"]') }
    get dropdownListOption1() { return $() }
    get openPageOfPandaImage() { return $() }
    get firstPandaImage() { return $() }
    get enlargedImage() { return $() }
    // TODO: resolve how to stay in Active Tab
    get pandaImageOnWikiPage() { return $() }
    get downloadPandaImageBtn() { return $() }
    get startDownloadBtn() { return $() }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async searchImage() {

        await browser.$("body > ntp-app").isExisting({
            timeout: 30000
        });
        browser.switchToFrame($("body > ntp-app").shadow$('//*[@id="content"]').$('//ntp-iframe'));
        await (await $('//a[@data-pid="2"]')).isExisting({
            timeout: 30000
        });
        await $('//a[@data-pid="2"]').click();
        browser.waitUntil(await $('#sbtc > div > div.a4bIc > input').isExisting({
            timeout: 30000
        }));
        await $('#sbtc > div > div.a4bIc > input').click();
        await $('#sbtc > div > div.a4bIc > input').setValue("panda")
        browser.keys('\uE007');
        await $('#REsRA').click();
        await $('#REsRA').setValue("Ailuropoda melanoleuca wikipedia");
        browser.keys('\uE007');
        browser.waitUntil(await $('#islrg > div.islrc > div:nth-child(1) > a.wXeWr.islib.nfEiy > div.bRMDJf.islir > img').isExisting({
            timeout: 10000
        }));
        await $('#islrg > div.islrc > div:nth-child(1) > a.wXeWr.islib.nfEiy > div.bRMDJf.islir > img').click();
        browser.waitUntil(await $('#Sva75c > div > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div > div.OUZ5W > div.zjoqD > div.qdnLaf.isv-id > div > a > img').isExisting({
            timeout: 10000
        }));
        await $('#Sva75c > div > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div > div.OUZ5W > div.zjoqD > div.qdnLaf.isv-id > div > a > img').click(); //go to wikipedia page

        browser.waitUntil(await $('.mw-body-content mw-content-ltr')
            .isExisting({
                timeout: 900000
            }));
        //let collection = browser.querySelectorAll('.mw-body-content mw-content-ltr');
        //console.log("elements collection: ", collection);
        //await document.images().click();
        await this.firstPandaImage.click();
        await this.enlargedImage.click();
    }

    downloadImage(startImageDownloadBtn) {
        this.pandaImageOnWikiPage.click();
        this.downloadPandaImageBtn.click();
        this.startDownloadBtn.click();
    }

    getFileName() {
        let downloadedFileName = startDownloadBtn.getAttribute('href');
        let downloadUrlFullPath = downloadedFileName.checkExistsWithTimeout();
        let splitPath = downloadUrlFullPath.split('/');
        let fileName = splitPath.splice(-1)[0];
        return fileName;
    }

    getFilePath() {
        let fileName = this.getFileName();
        let filePath = path.join(global.downloadDir, fileName);
        return filePath;
    }

    /**
     * overwrite specifc options to adapt it to page object
     */

}

module.exports = new Exercise1();
