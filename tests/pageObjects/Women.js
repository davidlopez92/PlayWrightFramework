const {expect} = require ('@playwright/test');
const {selectProducts} = require('../utils/SelectProducts.js');

class Women {

    constructor(page){
        this.page = page;
        this.womenjackets = page.locator('.product-item-info');
        this.womencolors = page.locator('.filter-options-title').nth(3);
        this.womencolorblue = page.locator('.filter-options-item [option-id="50"]');
        this.womenjacketsmall = page.locator('#option-label-size-143-item-167');
        this.womenjacketcolor = page.locator('#option-label-color-93-item-50');
        this.womenjacketadd = page.locator('#product-addtocart-button');
        this.womenproductname = page.locator('.product.name');
        this.productadded = page.locator('.message-success');
    }

    async selectColorBlue(){
        await this.womencolors.click();
        await this.womencolorblue.click();
    }
    async womenProductsSelected(){
        const selectedProducts = await selectProducts(
            this.womenjackets, 
            this.womenproductname,
            2, 
            this.womenjacketcolor, 
            this.womenjacketsmall, 
            this.womenjacketadd);
        return selectedProducts;
    }

}


module.exports = {Women};