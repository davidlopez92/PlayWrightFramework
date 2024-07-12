const {expect} = require ('@playwright/test');
const userData = JSON.parse(JSON.stringify(require("../testData/profileData.json")));

class Login {

    constructor(page){
        this.signIn = page.getByRole('link', {name: 'Sign In'});
        this.customerLogin = page.locator('.base');
        this.createanAccount = page.locator('.primary').getByRole('link', {name: 'Create An Account'});
        this.email = page.locator('#email');
        this.pass = page.getByLabel('Password')
        this.signInButton = page.locator('#send2').first();
        this.welcome = page.getByText('Welcome').first();
        this.welcomeDropdown = page.locator('.action.switch').first();
        this.signOut = page.getByRole('link', {name: 'sign out'});
        this.signOutMessage = page.locator('.base');
    }

    async logIn(){
        await this.signIn.click();
        await this.validateLoginPage();
        await this.email.fill(userData.email);
        await this.pass.fill(userData.password);
        await this.signInButton.click();
        //await expect (this.welcome).toContainText('Welcome');
    }

    async logOut(){
        await this.signIn.click();
        await this.validateLoginPage();
        await this.email.fill(userData.email);
        await this.pass.fill(userData.password);
        await this.signInButton.click();
        await expect (this.welcome).toContain('Welcome');
        await this.welcomeDropdown.click();
        await this.signOut.click();
        await expect (this.signOutMessage).toHaveText('You are signed out');


    }
    async createAnAccount (){
        this.createanAccount.click()
    }
    async validateLoginPage(){
        await expect (this.customerLogin).toHaveText('Customer Login');
    }
}

module.exports = {Login};