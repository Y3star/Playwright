//LoginPage.js
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

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginInput = page.locator('[id="username"]');
        this.passInput = page.locator('[id="password"]');
        this.checkBoxAutoLog = page.locator('[id="autologin"]');
        this.login = page.locator('[name="login"]');
    }

    async genSrting(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await selectedElement.fill(ganerateSrting(10));
        await delay(250);
    }

    async clickFun(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await selectedElement.click();
        await delay(250);
    }
};
