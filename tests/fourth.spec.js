// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { RegistrationPage } = require("../tests/PageObject/RegistrationPage");
test.use({ viewport: { width: 1920, height: 1080 } }); // local config for size window
test.use({ locale: "en-GB" }); // local config for eng Page // need for assert
let page;
let mainPage;
let regPage;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    mainPage = new MainPage(page);
    regPage = new RegistrationPage(page);
});

test("Registration checking input plus error message", async () => {
    await mainPage.goto();
    await mainPage.clickReg();
    await regPage.genSrting(regPage.loginInput);
    await regPage.genSrting(regPage.passInput);
    await regPage.genSrting(regPage.validInput);
    await regPage.genSrting(regPage.nameInput);
    await regPage.genSrting(regPage.surnameInput);
    await regPage.genSrting(regPage.emailInput);
    await regPage.genSrting(regPage.customInput);
    await regPage.clickFun(regPage.buttonCommit);
    await regPage.scrElem(regPage.errorShow);
});
