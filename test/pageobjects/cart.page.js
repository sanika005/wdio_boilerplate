const cartpage = require('./locators/cartpage.json')
class CartPage{
    async removeBtnsauceLabsBackPack(){
        await(await $(cartpage.sauceLabsBackPackremoveBtn)).click();
    }

    async removeBtnsauceLabsBikeLight(){
        await(await $(cartpage.sauceLabsBikeLightremoveBtn)).click();
    }

    async removeBtnsauceLabsBoltTshirt(){
        await(await $(cartpage.sauceLabsBoltTshirtremoveBtn)).click();
    }

    async removeBtnsauceLabsFleeceJacket(){
        await(await $(cartpage.sauceLabsFleeceJacketremoveBtn)).click();
    }

    async removeBtnsauceLabsOnesie(){
        await(await $(cartpage.sauceLabsOnesieremoveBtn)).click();
    }

    async removeBtntestallTheThingsT_shirt_Red(){
        await(await $(cartpage.testallTheThingsT_shirt_RedremoveBtn)).click();
    }

    async btnContinueShopping(){
        await(await $(cartpage.continueShoppingBtn)).click();
    }

    async btnCheckout(){
        await(await $(cartpage.checkoutBtn)).click();
    }
}

module.exports = new CartPage();