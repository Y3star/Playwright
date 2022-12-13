//WikiPage.js
const delay = (ms) => new Promise((a) => setTimeout(a, ms)); // only create delay to see something in test
exports.WikiPage = class WikiPage {
    constructor(page) {
        this.page = page;
        this.redmineList = page.locator(".wiki.wiki-page ul.toc.right li a");
        this.redmineListScr = page.locator('[class="toc right"]');
        this.redmineList2 = page.locator(".wiki.wiki-page ul:nth-child(9) li");
        this.redmineListScr2 = page.locator(".wiki.wiki-page ul:nth-child(9)");
    }
    async scrElem() {
        await this.redmineListScr.screenshot({
            path: "./scr/screenshotList.png",
        });
        await delay(200);
    }
    async scrElem2() {
        await this.redmineListScr2.screenshot({
            path: "./scr/screenshotList2.png",
        });
        await delay(200);
    }
};
