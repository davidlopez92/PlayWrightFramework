import {expect, Locator, Page} from '@playwright/test'

export class ProductPage {

    allProducts : Locator;
    viewProduct : Locator;
    addToCart : Locator;
    continueShopping : Locator;
    productInformation : Locator;
    page : Page;

    constructor(page:Page){
        this.allProducts = page.locator(".features_items .col-sm-4");
        this.viewProduct = page.locator(".fa-plus-square");
        this.addToCart = page.locator(".btn.cart");
        this.continueShopping = page.locator(".btn.btn-success");
        this.productInformation = page.locator(".product-information h2");
        this.page = page;

    }

    async selectProducts(total:number){
        const totalProducts : any = await this.allProducts.count();
        let selectedProducts:string[] = [];
        for(let i = 0; i < total; i++ ){
           const product:number = Math.floor(Math.random() * totalProducts);

           const productElement : Locator = this.viewProduct.nth(product)
           await productElement.click();
           
           const productName : any = await this.productInformation.textContent();
           selectedProducts.push(productName.trim());

           await this.addToCart.click();
           await this.continueShopping.click();
           await this.page.goBack();
        }
        console.log(selectedProducts);
        return selectedProducts;
    }
}