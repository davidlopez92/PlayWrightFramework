//With this function we create an array of products in the shopping cart to validate the products added.

async function shoppingCartProducts (name) {
    const cartProducts = await name.allTextContents();
    const cartProductsTrim = cartProducts.map(product => product.trim());
    console.log(cartProductsTrim);
    return cartProductsTrim;
}

module.exports = {shoppingCartProducts}