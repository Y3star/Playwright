//TaskPage.js
const { test, expect } = require("@playwright/test");
const delay = (ms) => new Promise((a) => setTimeout(a, ms)); // only create delay to see something in test
exports.TaskPage = class TaskPage {
    constructor(page) {
        this.page = page;
        this.button25 = page.locator('a[href*="per_page=25"]');
        this.button50 = page.locator('a[href*="per_page=50"]');
    }
    async arrayList(countPages) {
        let elements = await this.page.$$('[id*="issue-"]');
        await expect(elements.length).toBe(countPages);
        if (elements.length == countPages && elements.length == 25) {
            await this.page.click('a[href*="per_page=50"]');
        }
        else {
            await this.page.click('a[href*="per_page=25"]');
        }
        await delay(3000);
    } 
};
