const { playwright } = require('@playwright/test')

async function Page(){
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    return page;
}

module.exports = {Page};
