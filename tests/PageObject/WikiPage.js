//WikiPage.js
const delay = (ms) => new Promise((a) => setTimeout(a, ms)); // only create delay to see something in test
exports.WikiPage = class WikiPage {
    constructor(page) {
        this.page = page;
        this.redmineList = page.locator(".wiki.wiki-page ul.toc.right li a");
        this.redmineListScr = page.locator('[class="toc right"]');
    }
    async scrElem() {
        await this.redmineListScr.screenshot({ path: "screenshotList.png" });
        await delay(200);
    }
};
