const fsExtra = require('fs-extra');
const pathToChromeDownloads = './chromeDownloads';
const testData = require('../testData.json');
const assert = require('assert');
const { searchImage, downloadImage, getFilePath, getFileName } = require('../pageobjects/exercise1.page');
const { textSpanContainsPosition } = require('typescript');
const exercise1Page = require('../pageobjects/exercise1.page');
const exercise2Page = require('../pageobjects/exercise2.page');

describe('My Challenge application', () => {

    it('should be able to download a specified panda image from Google', async () => {
        await browser.url("https://www.google.com/");
        await browser.maximizeWindow();
        await searchImage();
        await downloadImage();

        let fileName = getFileName();
        let newFilePath = browser.call(function () {
            return checkExistsWithTimeout(
                getFilePath(filePath, 5000));
        });
        let downloadedImage = readImage(newFilePath)
        assert(fileName == testData.expectedFileName);
    });
    /*it('should be able to verify "search" functionality', async () => {
        await browser.url("http://automationpractice.com/index.php");
        await browser.maximizeWindow();
        exercise2Page.startSearch();
        //let headerCounter = exercise2Page.headerCounter.getText();
        //let displayedResults = exercise2Page.centerColumn.getHTML(false);
        //console.log("displayedResults: ", displayedResults);
        assert($('.heading-counter').isDisplayed());
    });*/
});


