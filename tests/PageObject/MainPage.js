// MainPage.js
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

exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.inputSearchInput = page.locator('[id="q"]');
        //  #main-menu Link's (button's)
        this.reviewLink = page.locator('[href="/projects/redmine"]'); //Обзор
        this.downloadLink = page.locator(
            '#main-menu [href*="/projects/redmine/wiki/Download"]'
        ); //Download
        this.activityLink = page.locator('[href="/projects/redmine/activity"]'); //Действия
        this.roadmapLink = page.locator('[href="/projects/redmine/roadmap"]'); //Оператывний план
        this.tasksLink = page.locator('[href="/projects/redmine/issues"]'); //Задачи
        this.newsLink = page.locator('[href="/projects/redmine/news"]'); //Новости
        this.wikiLink = page.locator('[href="/projects/redmine/wiki"]'); //Wiki
        this.forumsLink = page.locator('[href="/projects/redmine/boards"]'); //Форумы
        this.repositoryLink = page.locator(
            '[href="/projects/redmine/repository"]'
        ); //Repository
        //
        this.loginLink = page.locator('[href="/login"]'); // логин линк
        this.regLink = page.locator('[href="/account/register"]') // рег линк
    }

    async goto() {
        await this.page.goto("https://www.redmine.org/");
        await delay(200);
    }
    async clickLogin() {
        await this.loginLink.click();
        await this.page.waitForLoadState("networkidle");
    }
    async clickReg() {
        await this.regLink.click();
        await this.page.waitForLoadState("networkidle");
    }
    //
    async methodReview(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Overview");
        await selectedElement.click();
        await delay(200);
    }
    async methodDownload(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Download");
        await selectedElement.click();
        await delay(200);
    }
    async methodActivity(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Activity");
        await selectedElement.click();
        await delay(200);
    }
    async methodRoadmap(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Roadmap");
        await selectedElement.click();
        await delay(200);
    }
    async methodTasks(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Issues");
        await selectedElement.click();
        await delay(200);
    }
    async methodNews(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("News");
        await selectedElement.click();
        await delay(200);
    }
    async methodWiki(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Wiki");
        await selectedElement.click();
        await delay(200);
    }

    async methodForums(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Forums");
        await selectedElement.click();
        await delay(200);
    }

    async methodRepository(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Repository");
        await selectedElement.click();
        await delay(200);
    }
    //
    async methodGenerateText() {
        //await this.inputSearchInput.click();
        await expect(this.inputSearchInput).toBeVisible();
        await this.inputSearchInput.screenshot({ path: "input.png" });
        await this.inputSearchInput.fill(ganerateSrting(15));
        await delay(200);
    }
};
