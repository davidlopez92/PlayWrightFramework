const {expect} = require ('@playwright/test');

class Profile {

    constructor(page){
        this.myAccountPage = page.locator('.box-content p');

    }


}

module.exports = {Profile};