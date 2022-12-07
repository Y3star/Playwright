// @ts-check
const { test, expect } = require('@playwright/test');
const { MainPage } = require('../tests/PageObject/MainPage');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms)) // only create delay to see something in test
let mainPage;

test('Homepage has title and input to intro page', async ({ page }) => {
  mainPage = new MainPage(page);
  await mainPage.goto()

  await mainPage.clickReview()
  await delay(250);
  await mainPage.clickDownload()
  await delay(250);
  await mainPage.clickActivity()
  await delay(250);
  await mainPage.clickRoadmap()
  await delay(250);
  await mainPage.clickTasks()
  await delay(250);
  await mainPage.clickNews()
  await delay(250);
  await mainPage.clickWiki()
  await delay(250);
  await mainPage.clickForums()
  await delay(250);
  await mainPage.clickRepository()
  await delay(250);

  await mainPage.ganerateText()
  await delay(1000);
});
