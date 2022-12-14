**Playwright**
#
**Setup**

**Before use test project you need install [node.js](https://nodejs.org/en/) last version.**

**Download git repository and use install node modules**
```
git clone {repository URL}
```
**Open folder with your project and use command**
```
npm install
```
**Also you need to install allure report with command:**
```
npm i -D @playwright/test allure-playwright
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
**Allure open allure-report or for this project**
```
npm run generate
npm run report
```
**If u need see custom html reporter**
```
npx playwright show-report
```
**You must have these allure report:** [view report](https://y3star.github.io/Playwright/index.html)
![](https://i.imgur.com/8KMav4x.png)
