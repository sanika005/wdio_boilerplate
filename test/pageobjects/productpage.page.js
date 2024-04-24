const productpage = require('./locators/productpage.json')
class ProductPage{
    async btnAddToCart(){
        await(await $(productpage.addToCart)).click();
    }

    async btnBack(){
        await(await $(productpage.backButton)).click();
    }
}

module.exports = new ProductPage();