// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { WikiPage } = require("../tests/PageObject/WikiPage");
const delay = (ms) => new Promise((a) => setTimeout(a, ms)); // only create delay to see something in test
let mainPage;
let wikiPage;

test("Homepage has title and input to intro page", async ({ page }) => {
    mainPage = new MainPage(page);
    wikiPage = new WikiPage(page);

    await mainPage.goto();

    await mainPage.clickReview();
    await delay(250);
    await mainPage.clickDownload();
    await delay(250);
    await mainPage.clickActivity();
    await delay(250);
    await mainPage.clickRoadmap();
    await delay(250);
    await mainPage.clickTasks();
    await delay(250);
    await mainPage.clickNews();
    await delay(250);
    await mainPage.clickWiki();
    await delay(250);
    await mainPage.clickForums();
    await delay(250);
    await mainPage.clickRepository();
    await delay(250);

    await mainPage.ganerateText();
    await delay(1000);

    await mainPage.clickWiki();
    await delay(250);
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
