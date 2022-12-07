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
    async clickReview() {   
        await expect(this.reviewLink).toBeVisible();
        await expect(this.reviewLink).toHaveText("Overview")
        await this.reviewLink.click();     
    }
    async clickDownload() {
        await this.downloadLink.click();
    }
    async clickActivity() {
        await this.activityLink.click();
    }
    async clickRoadmap() {
        await this.roadmapLink.click();
    }
    async clickTasks() {
        await this.tasksLink.click();
    }
    async clickNews() {
        // expect
        await this.newsLink.click();
        // expect url
    }
    async clickWiki() {
        await this.wikiLink.click();
    }

    async clickForums() {
        await this.forumsLink.click();
    }

    async clickRepository() {
        await this.repositoryLink.click();
    }
    //

    async ganerateText() {
        await this.inputSearchInput.fill(ganerateSrting(15));
    }
};
