// MainPage.js

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
    this.inputSearchInput = page.locator('[id="q"]')  

  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }

  async ganerateText(){
    await this.inputSearchInput.fill(ganerateSrting(15))
  }

}