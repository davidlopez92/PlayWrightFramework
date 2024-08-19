const {Given, When, Then, BeforeAll, AfterAll} = require('@cucumber/cucumber');

Given("I visit {string}", async function(url){
     await this.page.goto(url);
})

When("I create a new account", async function(){
    await this.pm.homePage.clickCreateAccount();
    await this.pm.createAccount.createNewAccount();
})

Then("I validate account is created", async function(){
    await this.pm.createAccount.validateAccountCreated();
})

When ("I login", async function(){
    await this.pm.login.logIn();
})

Then ("I validate user logged in successfully", async function(){
    await this.pm.login.validateLogIn();
})

