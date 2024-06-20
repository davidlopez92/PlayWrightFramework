const {expect} = require ('@playwright/test');
const userData = JSON.parse(JSON.stringify(require("../testData/profileData.json")));
const {generateRandomEmail} = require('../utils/RandomEmail.js');

class CreateAccount {

    constructor(page){
        this.createAccountPage = page.locator('.base');
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lastname');
        this.email = page.locator('#email_address');
        this.password = page.locator('#password');
        this.confirmPassword = page.locator('#password-confirmation');
        this.createButton = page.getByRole('button', {name: 'Create an Account' });
        this.accountRegistered = page.locator('.message-success ');
        this.invalidConfirmPass = page.locator('#password-confirmation-error');
        this.existingEmail = page.locator('.message-error')
    }
    async createNewAccount(){
        const Email = generateRandomEmail();
        await this.validateCreateAccountPage();
        await this.firstName.fill(userData.firstname);
        await this.lastName.fill(userData.lastname);
        await this.email.fill(Email);
        await this.password.fill(userData.password);
        await this.confirmPassword.fill(userData.passwordconfirmation);
        await this.createButton.click();
        await this.validateAccountCreated();
    }

    async wrongConfirmationPassword(){
        const Email = generateRandomEmail();
        await this.validateCreateAccountPage();
        await this.firstName.fill(userData.firstname);
        await this.lastName.fill(userData.lastname);
        await this.email.fill(Email);
        await this.password.fill(userData.password);
        await this.confirmPassword.fill(userData.invalidpassword);
        await this.createButton.click();
        await this.validateInvalidPassword();
    }
    async existingEmailAccount(){
        await this.validateCreateAccountPage();
        await this.firstName.fill(userData.firstname);
        await this.lastName.fill(userData.lastname);
        await this.email.fill(userData.email);
        await this.password.fill(userData.password);
        await this.confirmPassword.fill(userData.passwordconfirmation);
        await this.createButton.click();
        await this.validateExistingEmail();
    }
    async validateCreateAccountPage(){
        await expect (this.createAccountPage).toHaveText('Create New Customer Account');
    }
    async validateExistingEmail(){
        await expect (this.existingEmail).toHaveText(/There is already an account with this email/);
    }
    async validateInvalidPassword(){
        await expect (this.invalidConfirmPass).toHaveText('Please enter the same value again.');
    }
    async validateAccountCreated(){
        await expect (this.accountRegistered).toHaveText('Thank you for registering with Main Website Store.')
    }

}

module.exports = {CreateAccount};