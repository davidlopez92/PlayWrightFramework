const {test, expect} = require ('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js');
const URL = JSON.parse(JSON.stringify(require("../testData/pageUrl.json")));

test.describe('Profile edit information', ()=>{
    let pm;

    test.beforeEach(async ({page})=>{
    await page.goto(URL.url);
    await expect(page).toHaveTitle('Home Page');
    pm = new POManager(page);
    });

    test('Add address to new account', async () => {
        await pm.homePage.clickCreateAccount();
        await pm.createAccount.createNewAccount();
        await pm.homePage.clickMyAccount();
        await pm.profile.validateMyAccountPage();
        await pm.profile.clickManageAddressess();
        await pm.profile.validateAddressPage();
        await pm.profile.addNewAddress();
    });

    test('Edit first name and last name', async ()=>{
        await pm.login.logIn();
        await pm.homePage.clickMyAccount();
        await pm.profile.editNameAndLastName();
        await pm.profile.saveAccountInformation();
    });

    test ('Edit profile address ', async ()=> {
        await pm.homePage.clickCreateAccount();
        await pm.createAccount.createNewAccount();
        await pm.homePage.clickMyAccount();
        await pm.profile.clickManageAddressess();
        await pm.profile.addNewAddress();
        await pm.profile.editAddress();

    });

    test('Validate placed orders', async ({page}) => {
        await pm.login.logIn();
        await pm.homePage.clickWomenTees();
        await page.waitForLoadState('domcontentloaded');
        await pm.women.addWomenTee();
        await page.waitForLoadState('domcontentloaded');
        const orderId = await pm.shoppingCart.createOrder();
        await pm.homePage.clickMyAccount();
        await pm.profile.validateOrders(orderId);

    });

    // test ('Validate items in wish list', async () =>{
        
    // });

});
