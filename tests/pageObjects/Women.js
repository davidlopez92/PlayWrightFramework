const {expect} = require ('@playwright/test');
const {selectProducts} = require('../utils/SelectProducts.js');
const {randomNum} = require('../utils/RandomNumber.js')

class Women {

    constructor(page){
        this.page = page;
        this.womenJackets = page.locator('.product-item-info');
        this.womenColors = page.locator('.filter-options-title').nth(3);
        this.womenColorBlue = page.locator('.filter-options-item [option-id="50"]');
        this.womenJacketSmall = page.locator('#option-label-size-143-item-167');
        this.womenJacketColor = page.locator('#option-label-color-93-item-50');
        this.addProduct = page.locator('#product-addtocart-button');
        this.womenProductName = page.locator('.product.name');
        this.productAdded = page.locator('.message-success');
        this.womenTees = page.locator('.product-item')
        this.womenTeeSize = page.locator('.swatch-option.text').first();
        this.womenTeeColor = page.locator('.swatch-option.color').first();
        }

    async selectColorBlue(){
        await this.womenColors.click();
        await this.womenColorBlue.click();
    }
    async womenProductsSelected(){
        const selectedProducts = await selectProducts(
            this.womenJackets, 
            this.womenProductName,
            2, 
            this.womenJacketColor, 
            this.womenJacketSmall, 
            this.addProduct);
        return selectedProducts;
    }

    async addWomenTee(){
        const num = randomNum(12);
        await this.womenTees.nth(num).click();
        await this.womenTeeSize.click();
        await this.womenTeeColor.click();
        await this.addProduct.click();
    }

}


module.exports = {Women};