// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { WikiPage } = require("../tests/PageObject/WikiPage");
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
    await mainPage.methodDownload(mainPage.downloadLink);
    await mainPage.methodActivity(mainPage.activityLink);
    await mainPage.methodRoadmap(mainPage.roadmapLink);
    await mainPage.methodTasks(mainPage.tasksLink);
    await mainPage.methodNews(mainPage.newsLink);
    await mainPage.methodWiki(mainPage.wikiLink);
    await mainPage.methodForums(mainPage.forumsLink);
    await mainPage.methodRepository(mainPage.repositoryLink);
});
