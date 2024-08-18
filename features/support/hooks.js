const { Before, After} = require('@cucumber/cucumber');
const { POManager } = require('../../tests/pageObjects/POManager.js');
const playwright = require('@playwright/test');

Before(async function(){
    const browser = await playwright.chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.pm = new POManager(this.page);
})