const {test, expect} = require ('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js');
const URL = JSON.parse(JSON.stringify(require("../testData/pageUrl.json")));

test.describe('Add products to shopping cart and checkout', ()=>{
    test.beforeEach(async ({page})=>{
    await page.goto(URL.url);
    await expect(page).toHaveTitle('Home Page');
    });

    test('Add different items to shopping cart', async ({page})=>{
        const pm = new POManager (page);

        await pm.homePage.clickJackets();
        await page.waitForLoadState('networkidle');
        await pm.women.selectColorBlue();
        const selectedProducts = await pm.women.womenProductsSelected();
        await page.waitForLoadState('networkidle');
        await pm.shoppingCart.clickShoppingCart();
        const expectedProducts = await pm.shoppingCart.validateCartProducts();
        expect (selectedProducts.sort()).toEqual(expectedProducts.sort())

    });


});