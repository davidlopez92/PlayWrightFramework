
class ApiUtils {
    constructor(apiContext, loginPayLoad){
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
        
    }

    async getToken(){
        //perform request and grab the response
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data:this.loginPayLoad} );
        //grab the response as a JSON
        const loginResponseJson = await loginResponse.json()
        //store token value from the json response
        const token = loginResponseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(orderPayLoad){
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
        {
            data: orderPayLoad,
            headers: 
            {      
                'Authorization': response.token, 
                'Content-Type': 'application/json' //indicates the body request contains JSON data
            },
        })
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        //from the response data get the value of the order ID
        const orderId =  orderResponseJson.orders[0];
        response.orderId = orderId;

        return response;
    };

    async addToCart(addToCartPayload){
        const addToCartReponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart", 
            {
                data: addToCartPayload,
                headers: 
                {      
                    'Authorization': await this.getToken(), 
                    'Content-Type': 'application/json' //indicates the body request contains JSON data
                },
            })
        const addToCartReponseJson = await addToCartReponse.json();
        console.log(addToCartReponseJson)
    }
    
        

}

module.exports = {ApiUtils};