// @ts-check
const { test, expect } = require('@playwright/test');
const { MainPage } = require('../tests/PageObject/MainPage');
let mainPage;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms)) // only create delay to see something in test

test('homepage has title and input to intro page', async ({ page }) => {
  mainPage = new MainPage(page);
  await mainPage.goto()
  await mainPage.ganerateText()
  await delay(1000);


});
