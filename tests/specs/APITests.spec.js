const {test, request} = require ('@playwright/test');
const URL = JSON.parse(JSON.stringify(require("../testData/pageUrl.json")));
const loginPayLoad = JSON.parse(JSON.stringify(require("../testData/loginPayLoad.json")))
const orderPayLoad = {orders: [{country: "Mexico",productOrderedId: "6581ca399fd99c85e8ee7f45"}]}
const addToCartPayload = JSON.parse(JSON.stringify(require("../testData/AddToCartPayLoad.json")))
const {ApiUtils} = require("../pageObjects/ApiUtils");
const { AutomationApi } = require('../pageObjects/AutomationApi');

let response;

test.beforeAll( async ()=> {
        //create a variable for a new request context
        const apiContext = await request.newContext();
        //create a new instance to ApiUtils class and set arguments
        const apiUtils = new ApiUtils (apiContext, loginPayLoad);
        await apiUtils.addToCart(addToCartPayload);
        response = await apiUtils.createOrder(orderPayLoad);
});

test('Verify order placed successfully', async ({page}) =>{
    const autoApi = new AutomationApi (page);
    //set up local storage and cookies with this function 
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);
    await page.goto(URL.url2)
    await autoApi.validateOrder(response.orderId); 
})

test('Verify item is added to cart', async ({page}) =>{
    const autoApi = new AutomationApi(page);
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);

    await page.goto(URL.url2);

})