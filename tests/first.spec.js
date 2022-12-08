// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { WikiPage } = require("../tests/PageObject/WikiPage");
const delay = (ms) => new Promise((a) => setTimeout(a, ms)); // only create delay to see something in test
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

test("Click,comparing text and whether an element is visible", async () => {
    await mainPage.goto();
    await mainPage.methodReview(mainPage.reviewLink);
    await delay(250);

    await mainPage.methodDownload(mainPage.downloadLink);
    await delay(250);

    await mainPage.methodActivity(mainPage.activityLink);
    await delay(250);

    await mainPage.methodRoadmap(mainPage.roadmapLink);
    await delay(250);

    await mainPage.methodTasks(mainPage.tasksLink);
    await delay(250);

    await mainPage.methodNews(mainPage.newsLink);
    await delay(250);

    await mainPage.methodWiki(mainPage.wikiLink);
    await delay(250);

    await mainPage.methodForums(mainPage.forumsLink);
    await delay(250);

    await mainPage.methodRepository(mainPage.repositoryLink);
    await delay(700); // End test


});

