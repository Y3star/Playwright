// @ts-check
const { test, expect } = require("@playwright/test");
const { MainPage } = require("../tests/PageObject/MainPage");
const { WikiPage } = require("../tests/PageObject/WikiPage");

test.use({ viewport: { width: 1920, height: 1080 } }); // local config for size window
test.use({ locale: "en-GB" }); // local config for eng Page // need for assert

let page;
let mainPage;
let wikiPage;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    mainPage = new MainPage(page);
    wikiPage = new WikiPage(page);
});

test("Assert ul , and written text in search input", async () => {
    await mainPage.goto();
    await wikiPage.scrElem();
    await expect(wikiPage.redmineList).toHaveText([
        "Redmine",
        "Features",
        "Documentation",
        "Online demo",
        "Support & getting help",
        "Contributing and helping out",
        "Who uses Redmine?",
        "Redmine books",
    ]);
    console.log(await wikiPage.innerTextAll())
    await wikiPage.scrElem2();
    await expect(wikiPage.redmineList2).toHaveText([
        "Multiple projects support",
        "Flexible role based access control",
        "Flexible issue tracking system",
        "Gantt chart and calendar",
        "News, documents & files management",
        "Feeds & email notifications",
        "Per project wiki",
        "Per project forums",
        "Time tracking",
        "Custom fields for issues, time-entries, projects and users",
        "SCM integration (SVN, CVS, Git, Mercurial and Bazaar)",
        "Issue creation via email",
        "Multiple LDAP authentication support",
        "User self-registration support",
        "Multilanguage support",
        "Multiple databases support",
    ]);
    // End Test
});
