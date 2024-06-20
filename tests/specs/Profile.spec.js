const {test, expect} = require ('@playwright/test');
const { POManager } = require('../pageObjects/POManager.js');
const URL = JSON.parse(JSON.stringify(require("../testData/pageUrl.json")));

test.describe('Profile regsitration, edit and sign in', ()=>{

    test.beforeEach(async ({page})=>{
    await page.goto(URL.url);
    await expect(page).toHaveTitle('Home Page');
    });

    test('Create new customer account', async ({page}) => {
        const pm = new POManager(page);

        await pm.homePage.clickCreateAccount();
        await pm.createAccount.createNewAccount();
        });

    test('Create Account from Login page', async ({page})=>{
        const pm = new POManager(page);

        await pm.homePage.clickSignIn();
        await pm.login.createAnAccount();
        await pm.createAccount.createNewAccount();
    });

    test ('Validate wrong confirm password', async ({page})=> {
        const pm = new POManager(page);

        await pm.homePage.clickCreateAccount();
        await pm.createAccount.wrongConfirmationPassword();
    })

    test('Validate existing email address', async ({page}) => {
        const pm = new POManager(page);

        await pm.homePage.clickCreateAccount();
        await pm.createAccount.existingEmailAccount();
    })

    test ('Customer login successfuly', async ({page}) =>{
        const pm = new POManager(page);
        await pm.login.logIn();
    })

    test('Customer log out', async ({page}) => {
        const pm = new POManager(page);
        await pm.login.logOut();
    })



})
