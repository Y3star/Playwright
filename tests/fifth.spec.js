// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { TaskPage } = require("../tests/PageObject/TaskPage");
test.use({ viewport: { width: 1920, height: 1080 } }); // local config for size window
test.use({ locale: "en-GB" }); // local config for eng Page // need for assert
let page;
let mainPage;
let taskPage;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    mainPage = new MainPage(page);
    taskPage = new TaskPage(page);
});

test("Task page checking list", async () => {
    await mainPage.goto();
    await mainPage.methodTasks(mainPage.tasksLink);
    await taskPage.arrayList(25);
    await taskPage.arrayList(50);
    await mainPage.methodGenerateText();
});
