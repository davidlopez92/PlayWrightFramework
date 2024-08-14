import {test, expect} from '@playwright/test';
import { POManager } from '../../testsTS/pageObjects/POManager';
import {url} from '../../testsTS/testData/pageURL.json';

let pm : any;

test.describe('Validate products and shopping cart', ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto(url);
        pm = new POManager (page);
    })

    test('Validate products added to cart', async ({page}) =>{
        await pm.home.clickProducs();
        const selectedProdcuts : string[] = await pm.productPage.selectProducts(2);
        await pm.home.clickCart();
        const validateProducts : string[] = await pm.cartPage.validateCartProducts();
        expect (selectedProdcuts).toEqual(validateProducts);
    })
})