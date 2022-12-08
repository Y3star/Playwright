// MainPage.js
const { test, expect } = require("@playwright/test");

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
        
    }

    async goto() {
        await this.page.goto("https://www.redmine.org/");
    }
    //
    async methodReview(selectedElement) {   
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Overview")
        await selectedElement.click();     
    }
    async methodDownload(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Download")
        await selectedElement.click();
    }
    async methodActivity(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Activity")
        await selectedElement.click();
    }
    async methodRoadmap(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Roadmap")
        await selectedElement.click();
    }
    async methodTasks(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Issues")
        await selectedElement.click();
    }
    async methodNews(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("News")
        await selectedElement.click();
    }
    async methodWiki(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Wiki")
        await selectedElement.click();
    }

    async methodForums(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Forums")
        await selectedElement.click();
    }

    async methodRepository(selectedElement) {
        await expect(selectedElement).toBeVisible();
        await expect(selectedElement).toHaveText("Repository")
        await selectedElement.click();
    }
    //
    async methodGenerateText() {
        await expect(inputSearchInput).toBeVisible();
        await this.inputSearchInput.screenshot({ path: 'input.png' });
        await this.inputSearchInput.fill(ganerateSrting(15));
    }
};
