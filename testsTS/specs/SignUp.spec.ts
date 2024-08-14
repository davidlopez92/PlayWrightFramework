import {test, expect} from '@playwright/test';
import { POManager } from '../../testsTS/pageObjects/POManager';
import {url} from '../../testsTS/testData/pageURL.json';

let pm: any;

test.describe ('User sign up and login', ()=>{
    test.beforeEach(async ({page}) =>{
        await page.goto(url);
        pm = new POManager(page);
    });

    test('Validate register user', async ()=>{
        await pm.home.clickSignupLogin();
        await pm.profilePage.newUserSignUp();
    });

    test('Login User with correct email and password', async ()=>{
        await pm.home.clickSignupLogin();
        await pm.profilePage.userLogin();
    });

    test('Login User with incorrect email and password', async ()=>{
        await pm.home.clickSignupLogin();
        await pm.profilePage.wrongEmailLogin();
    });

    test('Logout User', async ()=>{
        await pm.home.clickSignupLogin();
        await pm.profilePage.logoutUser();
    });
    
    test('Register User with existing email', async ()=>{
        await pm.home.clickSignupLogin();
        await pm.profilePage.existingEmailSignup();
    });






});