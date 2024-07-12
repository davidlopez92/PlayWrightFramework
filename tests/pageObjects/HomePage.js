const {expect} = require ('@playwright/test');

class HomePage {

    constructor(page){
        this.createAccount = page.getByRole('link', {name: 'Create an Account'} );
        this.signIn = page.getByRole('link', {name: 'Sign In'});
        this.welcome = page.getByText('Welcome, david lopez!').first();
        this.welcomeDropdown = page.locator('.action.switch').first();
        this.myAccount = page.getByRole('link', {name: 'My Account'});
        this.signOut = page.getByRole('link', {name: 'sign out'});
        this.signOutMessage = page.locator('.base');
        this.women = page.locator('#ui-id-4');
        this.men = page.locator('#ui-id-5');
        this.gear = page.locator('#ui-id-6');
        this.gearBags = page.locator('#ui-id-25');
        this.training = page.locator('#ui-id-7');
        this.sale = page.locator('#ui-id-8');
        this.womenTops = page.locator('#ui-id-9');
        this.womenBottoms = page.locator('#ui-id-10');
        this.womenTopsJacket = page.locator('#ui-id-11');
        this.womenTopsTees = page.locator('#ui-id-13');
        this.womenBottomsPants = page.locator('##ui-id-15');
    }
    async clickCreateAccount(){
        await this.createAccount.click();
    }
    async clickSignIn(){
        await this.signIn.click();
    }
    async customerSignOut(){
        await this.welcomeDropdown.click();
        await this.signOut.click();
    }
    async clickWomenJackets(){
        await this.women.hover();
        await this.womenTops.hover();
        await this.womenTopsJacket.click();
    }
    async clickWomenTees(){
        await this.women.hover();
        await this.womenTops.hover();
        await this.womenTopsTees.click();
    }
    async clickMyAccount(){
        await this.welcomeDropdown.click();
        await this.myAccount.click();
    }
    async validateWelcomeUser(){
        await expect (this.welcome).toHaveText('Welcome, david lopez!');
    }
    async validateSignOut(){
        await expect (this.signOutMessage).toHaveText('You are signed out');
    }
    async clickGearBags(){
        await this.gear.hover();
        await this.gearBags.click();
    }


}

module.exports = {HomePage};