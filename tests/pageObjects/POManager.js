const { HomePage } = require('./HomePage');
const { CreateAccount } = require('./CreateAccount');
const { Login } = require('./Login');
const { Profile } = require ('./Profile');
const { Women } = require('./Women');
const { ShoppingCart } = require('./ShoppingCart');
const { GearItems } = require ('./GearItems');

class POManager{
  constructor(page){
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.createAccount = new CreateAccount(this.page);
    this.login = new Login(this.page);
    this.profile = new Profile(this.page);
    this.women = new Women(this.page);
    this.shoppingCart = new ShoppingCart(this.page);
  }

  getLoginPage(){
    return this.login;
  }
  getHomePage(){
    return this.homePage;
  }
  getCreateAccountPage(){
    return this.createAccount;
  }
  getProfilePage(){
    return this.profile;
  }
  getWomenPage(){
    return this.women;
  }
  getShoppingCartPage(){
    return this.shoppingCart;
  }
  getGearItemsPage(){
    return this.gearItems;
  }
}
module.exports = {POManager};
