// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { LoginPage } = require("../tests/PageObject/LoginPage");
test.use({ viewport: { width: 1920, height: 1080 } }); // local config for size window
test.use({ locale: "en-GB" }); // local config for eng Page // need for assert
let page;
let mainPage;
let loginPage;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    mainPage = new MainPage(page);
    loginPage = new LoginPage(page);
});

test("Login Page checking input with screenshot error message", async () => {
    await mainPage.goto();
    await mainPage.clickLogin();
    await loginPage.genSrting(loginPage.loginInput);
    await loginPage.genSrting(loginPage.passInput);
    await loginPage.clickFun(loginPage.checkBoxAutoLog);
    await loginPage.clickFun(loginPage.login);
    await loginPage.scrElem(loginPage.errorFlash);
    // End test
});
