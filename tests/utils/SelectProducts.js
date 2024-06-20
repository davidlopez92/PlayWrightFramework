
// With this function we can add products to the shopping cart by type of item and return an array. The parameters we need to include are the name, quantity of products to add, color, size and add button.

async function selectProducts (item, name, range, sizes, colors, add){
    const productNames = [];
    const page = item.page();

    for (let i = 0; i < range; ++i){ 
        const productName = await name.nth(i).textContent();
        productNames.push(productName); 
            
        await item.nth(i).click();
        await sizes.click();
        await colors.click();        
        await add.click();
        await item.page().waitForTimeout(1000);
        await page.goBack();
        await page.waitForLoadState('domcontentloaded');
    }
    const trimProducts = productNames.map(products => products.trim());
    console.log(trimProducts);
    return trimProducts;
}

module.exports = {selectProducts};