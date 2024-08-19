const {test, expect} = require ('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js');
const URL = JSON.parse(JSON.stringify(require("../testData/pageUrl.json")));

test.describe('Profile regsitration, edit and sign in', ()=>{
    let pm;

    test.beforeEach(async ({page})=>{
    await page.goto(URL.url);
    await expect(page).toHaveTitle('Home Page');
    pm = new POManager(page);
    });

    test('Create new customer account', async ({page}) => {
        await pm.homePage.clickCreateAccount();
        await pm.createAccount.createNewAccount();
        });

    test('Create Account from Login page', async ({page})=>{
        await pm.homePage.clickSignIn();
        await pm.login.createAnAccount();
        await pm.createAccount.createNewAccount();
    });

    test ('Validate wrong confirm password', async ({page})=> {
        await pm.homePage.clickCreateAccount();
        await pm.createAccount.wrongConfirmationPassword();
    });

    test('Validate existing email address', async ({page}) => {
        await pm.homePage.clickCreateAccount();
        await pm.createAccount.existingEmailAccount();
    });

    test ('Customer login successfuly', async ({page}) =>{
        await pm.login.logIn();
        await pm.login.validateLogIn();
    });

    test('Customer log out', async ({page}) => {
        await pm.login.logOut();
    });



})
