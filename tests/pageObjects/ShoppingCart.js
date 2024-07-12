const {expect} = require ('@playwright/test');
const {shoppingCartProducts} = require('../utils/CartProducts.js')

class ShoppingCart {
    constructor(page) {
        this.cart = page.locator('.showcart');
        this.cartproducts = page.locator('#mini-cart .product-item-name');
        this.proceedCheckout = page.locator('#top-cart-btn-checkout');
        this.nextButtonCheckout = page.locator('.button');
        this.placeOrder = page.locator('.checkout');
        this.orderNumber = page.locator('.order-number')
    }

    async clickShoppingCart(){
        await this.cart.click();
    }
    async validateCartProducts(){
        const expectedProducts = await shoppingCartProducts(this.cartproducts);
        return expectedProducts;
    }
    async createOrder(){
        await this.cart.click();
        await this.proceedCheckout.click();
        await this.nextButtonCheckout.click();
        await this.placeOrder.click();
        const orderId = await this.orderNumber.textContent();
        console.log(orderId)
        return orderId;
    }
    async updateItemQty(){
        await this.cart.click();
        
    }

}


module.exports = {ShoppingCart};
