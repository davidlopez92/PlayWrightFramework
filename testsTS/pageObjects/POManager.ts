import { Home } from "../../testsTS/pageObjects/Home";
import { ProfilePage } from "../../testsTS/pageObjects/ProfilePage";
import { ProductPage } from "./Products";
import { CartPage } from "./Cart"
import { Page } from '@playwright/test';

export class POManager {
    home : Home;
    profilePage : ProfilePage;
    productPage : ProductPage;
    cartPage : CartPage;
    page : Page;

    constructor(page:Page) {
        this.page = page;
        this.home = new Home (this.page);
        this.profilePage = new ProfilePage(this.page);
        this.productPage = new ProductPage(this.page);
        this.cartPage = new CartPage(this.page);
    }

    getHomePage(){
        return this.home;
    }

    getProfilePage(){
        return this.profilePage;
    }

    getProductPage(){
        return this.productPage;
    }
     getCarPage(){
        return this.cartPage;
     }


}

