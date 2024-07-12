const {expect} = require ('@playwright/test');
const userData = JSON.parse(JSON.stringify(require("../testData/profileData.json")));
const {randomName, randomLastName} = require ("../utils/RandomNames")

class Profile {

    constructor(page){
        this.myAccountPage = page.locator('.base');
        this.manageAddressess = page.getByRole('link', {name: 'Manage Addresses'});
        this.addNewAddressPage = page.locator('.base');
        this.streetAddress = page.locator('#street_1');
        this.city = page.locator('#city');
        this.state = page.locator('#region_id');
        this.postalCode = page.locator('#zip');
        this.country = page.locator('#country');
        this.firstName = page.locator('#firstname');
        this.lastName = page.locator('#lastname');
        this.company = page.locator('#company');
        this.phoneNumber = page.locator('#telephone');
        this.billingAddressBox = page.locator('#primary_billing');
        this.shippingAddressBox = page.locator('#primary_shipping');
        this.saveAddress = page.locator('.action.save');
        this.newAddressSaved = page.locator('.box-address-billing .box-content address');
        this.editInformation = page.getByRole('link', {name: 'Edit', exact: true} );
        this.saveInformation = page.locator('.save');
        this.changeAddress = page.locator('.action.edit').first();
        this.myOrders = page.locator('.nav,item').nth(2);
        this.ordersTable = page.locator('tbody tr');
        this.orderNum = page.locator('.id');
        this.viewOrder = page.locator('.action.view');
        this.orderIdDetails = page.locator('.base');
    };

    async validateMyAccountPage(){
        await expect (this.myAccountPage).toHaveText('My Account');
    };

    async clickManageAddressess(){
        await this.manageAddressess.click();
    };

    async validateAddressPage(){
        await expect(this.addNewAddressPage).toHaveText('Add New Address');
    };
    async addNewAddress(){
        await this.streetAddress.fill(userData.streetAddress);
        await this.city.fill(userData.city);
        await this.country.selectOption(userData.country);
        await this.state.selectOption(userData.state);
        await this.postalCode.fill(userData.postalCode);
        await this.company.fill(userData.company);
        await this.phoneNumber.fill(userData.phoneNumber);
        await this.saveAddress.click();
        await this.validateNewAddress(userData.country);
    };

    async validateNewAddress(country){
        const addressText = await this.newAddressSaved.innerText();
        expect(addressText).toContain(country);
        console.log(addressText);
    };
    async editNameAndLastName(){
        const name = randomName(userData.names);
        const lastName = randomLastName(userData.arrayLastNames);
        await this.editInformation.click();
        await this.firstName.fill(name);    
        await this.lastName.fill(lastName);   
    };

    async saveAccountInformation(){
        await this.saveInformation.click();
    }

    async editAddress(){
        await this.changeAddress.click();
        await this.streetAddress.fill(userData.newStreet)
        await this.city.fill(userData.newCity)
        await this.country.selectOption(userData.newCountry)
        await this.state.selectOption(userData.newState)
        await this.postalCode.fill(userData.newZip)
        await this.saveAddress.click();
        await this.validateNewAddress(userData.newCountry);
    }
    async validateOrders(orderID){
        await this.myOrders.click();
        const row = await this.ordersTable;

        for(let i=0; i < await row.count(); ++i){
            const rowOrderId = await row.nth(i).locator('.id').textContent();
            if (orderID.includes(rowOrderId)){
                await row.nth(i).locator('.action.view').click();
                break;
            }
        }
        const orderDetails = await this.orderIdDetails.textContent();
        console.log(orderDetails)
        expect (orderDetails.includes(orderID)).toBeTruthy();

    }
    




}

module.exports = {Profile};