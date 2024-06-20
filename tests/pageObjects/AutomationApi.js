const {expect} = require ('@playwright/test');


class AutomationApi {
    constructor(page){
        this.orders = page.locator('.btn.btn-custom:has-text("ORDERS")')
        this.wait = page.locator('tbody');
        this.ordersTable = page.locator('tbody tr');
        this.idDeatils = page.locator('.col-text');
        this.cart = page.locator('.btn.btn-custom:has-text("Cart")')

    }
    async validateOrder(orderId){
        await this.orders.click();
        await this.wait.waitFor();
        const rows = await this.ordersTable;

        for (let i=0; i < await rows.count(); ++i)
        {
            const rowOrderId = await rows.nth(i).locator('th').textContent();
            if (orderId.includes(rowOrderId)){
                await rows.nth(i).locator('button').first().click();
                break;
            }
        }
        const orderIdDetails = await this.idDeatils.textContent();
        expect (orderId.includes(orderIdDetails)).toBeTruthy();
    }

    async validateCartItem(){
        await this.cart.click();
        

    }
}

module.exports = {AutomationApi};