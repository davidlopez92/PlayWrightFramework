import {expect, Locator, Page} from '@playwright/test'
import * as data from '../../testsTS/testData/profileData.json'
import { RandomNum } from '../utils/RandomNum';
import { EmailGeneration } from '../utils/EmailGeneration';

export class ProfilePage {
    
    name : Locator;
    email : Locator;
    signUpButton : Locator;
    password : Locator;
    firstName : Locator;
    lastName : Locator;
    company : Locator;
    address : Locator;
    country : Locator;
    state : Locator;
    city : Locator;
    zipcode : Locator;
    mobile : Locator;
    titleGender : Locator;
    day : Locator;
    month : Locator;
    year : Locator;
    createAccountButton : Locator;
    validateAccountCreated : Locator;
    loginPassword : Locator;
    loginButton : Locator;
    errorMessageLogin : Locator;
    loggedSuccessful : Locator;
    logout : Locator;
    signupLogin : Locator;
    existingEmailMessage : Locator;

    constructor(page:Page){
        this.name = page.getByPlaceholder("Name");
        this.email = page.getByPlaceholder("Email Address");
        this.loginPassword = page.getByPlaceholder('Password');
        this.loginButton = page.locator("[data-qa='login-button']")
        this.signUpButton = page.locator("[data-qa='signup-button']");
        this.titleGender = page.locator("#id_gender1");
        this.password = page.locator("#password");
        this.day = page.locator("#days");        
        this.month = page.locator("#months");     
        this.year = page.locator("#years");   
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address = page.locator("#address1");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobile = page.locator("#mobile_number");
        this.createAccountButton = page.locator("[data-qa='create-account']");  
        this.validateAccountCreated = page.locator(".title");
        this.errorMessageLogin = page.locator(".login-form p");
        this.loggedSuccessful = page.locator(".nav a b");
        this.logout = page.locator(".fa.fa-lock");
        this.signupLogin = page.locator("a[href='/login']");
        this.existingEmailMessage = page.locator(".signup-form p");

    }

    async newUserSignUp(){
       await this.name.fill(data.name);
       await this.email.nth(1).fill(EmailGeneration());
       await this.signUpButton.click();
       await this.titleGender.check();
       await this.password.fill(data.password);
       await this.day.selectOption(data.day);
       await this.month.selectOption(data.month);
       await this.year.selectOption(data.year);
       await this.firstName.fill(data.firstName);
       await this.lastName.fill(data.lastName);
       await this.company.fill(data.company);
       await this.address.fill(data.address);
       await this.country.selectOption(data.country[RandomNum(3)]);
       await this.state.fill(data.state);
       await this.city.fill(data.city);
       await this.zipcode.fill(data.zipcode);
       await this.mobile.fill(data.mobile);
       await this.createAccountButton.click();
       await expect(this.validateAccountCreated).toHaveText("Account Created!");
    }

    async userLogin(){
        await this.email.nth(0).fill(data.email);
        await this.loginPassword.fill(data.password);
        await this.loginButton.click();
        await expect (this.loggedSuccessful).toHaveText(data.name); 

    }

    async wrongEmailLogin(){
        await this.email.nth(0).fill(data.wrongEmail);
        await this.loginPassword.fill(data.wrongPassword);
        await this.loginButton.click();
        await expect(this.errorMessageLogin).toHaveText("Your email or password is incorrect!");
    }

    async logoutUser(){
        await this.email.nth(0).fill(data.email);
        await this.loginPassword.fill(data.password);
        await this.loginButton.click();
        await expect (this.loggedSuccessful).toHaveText(data.name);
        await this.logout.click();
        await expect(this.signupLogin).toHaveText(" Signup / Login");
    }

    async existingEmailSignup(){
        await this.name.fill(data.name);
        await this.email.nth(1).fill(data.email);
        await this.signUpButton.click();
        await expect(this.existingEmailMessage).toHaveText("Email Address already exist!");
    }
}