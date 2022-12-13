**Playwright**
#
**Setup**

**Before use test project you need install [node.js](https://nodejs.org/en/) last version.**

**Also you need to install allure report with command:**
```
npm i -D @playwright/test allure-playwright
```
**Download git repository and use install node modules**
```
git clone {repository URL}
```
**After that we can run all our tests.**
```
npx playwright test
```
**We can run only one test, example "test1".**
```
npm  run test1
```
**We need generate and open Allure Report.**
```
npx allure generate allure-results --clean
```
**allure open allure-report or for this project**
```
npm run generate
npm run report
```
**You must have these allure report:**
