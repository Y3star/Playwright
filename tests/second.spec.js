// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { WikiPage } = require("../tests/PageObject/WikiPage");
const delay = (ms) => new Promise((a) => setTimeout(a, ms)); // only create delay to see something in test  or use this await page.waitForTimeout(3000);
test.use({ viewport: { width: 1920, height: 1080 } }); // local config for size window
test.use({ locale: "en-GB" }); // local config for eng Page // need for assert

let page;
let mainPage;
let wikiPage;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    mainPage = new MainPage(page);
    wikiPage = new WikiPage(page);
});

test("Assert ul , and written text in search input", async () => {
    await mainPage.goto();
    await delay(300);

    await mainPage.methodGenerateText();
    await delay(300);

    await wikiPage.scrElem();
    await delay(300);
    await expect(wikiPage.redmineList).toHaveText([
        "Redmine",
        "Features",
        "Documentation",
        "Online demo",
        "Support & getting help",
        "Contributing and helping out",
        "Who uses Redmine?",
        "Redmine books",
    ]);
});
