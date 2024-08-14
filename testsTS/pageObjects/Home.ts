import {expect, Locator, Page} from '@playwright/test'

export class Home {

    signupLogin : Locator;
    products : Locator;
    cart : Locator;



    constructor(page:Page){
        this.signupLogin = page.locator(".fa.fa-lock");
        this.products = page.locator(".material-icons.card_travel");
        this.cart = page.getByRole("link", {name: " Cart"});      
    }

    async clickSignupLogin(){
        await this.signupLogin.click();
    }

    async clickProducs(){
        await this.products.click();
    }

    async clickCart(){
        await this.cart.click();
    }

}

