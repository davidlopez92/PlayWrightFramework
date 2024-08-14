import { expect, Locator, Page } from "@playwright/test";


export class CartPage {

    productTable : Locator;
    products : Locator;
    productDescription : Locator;

    constructor(page:Page){
        this.productTable = page.locator("tbody tr");
        this.products = page.locator("tr");
        this.productDescription = page.locator(".cart_description h4");
        
    }

    async validateCartProducts(){
        const countProducts : number = await this.productTable.count();
        let products : string [] = [];
        for(let i = 0 ; i < countProducts; i++){
            const description:any = await this.productDescription.nth(i).textContent();
            products.push(description.trim());
        }
        console.log(products);
        return products;
    }
}