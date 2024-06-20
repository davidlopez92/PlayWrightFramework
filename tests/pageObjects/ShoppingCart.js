const {expect} = require ('@playwright/test');
const {shoppingCartProducts} = require('../utils/CartProducts.js')

class ShoppingCart {
    constructor(page) {
        this.cart = page.locator('.showcart')
        this.cartproducts = page.locator('#mini-cart .product-item-name')
        
    }

    async clickShoppingCart(){
        await this.cart.click();
    }
    async validateCartProducts(){
        const expectedProducts = await shoppingCartProducts(this.cartproducts);
        return expectedProducts;
    }

}


module.exports = {ShoppingCart};
