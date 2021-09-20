const Page = require('./page');
const path = require('path');
const testData = require('../testData.json');

class Exercise2 extends Page {


    /**
     * 
     * @param {String} searchCriteria 
     */
    async startSearch() {

        browser.waitUntil(await $('#search_query_top').isExisting({
            timeout: 30000
        }));
        await $('#search_query_top').click();
        await $('#search_query_top').setValue("short");
        browser.keys('\uE007');
        browser.waitUntil(await $('.heading-counter').isExisting({
            timeout: 30000
        }));
        await $('.heading-counter').isDisplayed();

        browser.waitUntil(await $('.product-count').isExisting({
            timeout: 30000
        }));
    }
}
module.exports = new Exercise2();