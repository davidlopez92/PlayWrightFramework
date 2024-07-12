const {randomNum} = require('../utils/RandomNumber.js')

class GearItems {
 
    constructor(page) {
        this.products = page.locator('.product-item');
        this.addToCart = page.locator('#product-addtocart-button')

    }   

    async addBag(){
        const num = randomNum(12);
        await this.products.nth(num).click();
        await this.addToCart.click();
    }
}


module.exports = {GearItems};