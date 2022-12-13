//RegistrationPage.js
const { test, expect } = require("@playwright/test");
const delay = (ms) => new Promise((a) => setTimeout(a, ms)); // only create delay to see something in test

function ganerateSrting(length) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

exports.RegistrationPage = class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.loginInput = page.locator('[id="user_login"]');
        this.passInput = page.locator('[id="user_password"]');
        this.validInput = page.locator('[id="user_password_confirmation"]');
        this.nameInput = page.locator('[id="user_firstname"]');
        this.surnameInput = page.locator('[id="user_lastname"]');
        this.emailInput = page.locator('[id="user_mail"]');
        this.customInput = page.locator('[id="user_custom_field_values_3"]');
        this.buttonCommit = page.locator('[name="commit"]');
        this.errorShow = page.locator('[id="errorExplanation"]');
    }

    async genSrting(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await selectedElement.fill(ganerateSrting(10));
        await delay(350);
    }

    async clickFun(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await selectedElement.click();
        await delay(350);
    }
    async scrElem(selectedElement) {
        await delay(3000);
        await selectedElement.screenshot({
            path: "./scr/screenshotErrReg.png",
        });
    }
};
