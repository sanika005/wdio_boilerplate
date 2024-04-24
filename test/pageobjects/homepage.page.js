const { expect } = require('chai');
const homepage = require('./locators/homepage.json')
class HomePage {
    async btnClickMenu(){
        await(await $(homepage.btnMenu)).click();
    }

    async linkAllItems(){
        await(await $(homepage.linkAllItems)).click();
    }

    async linkAbout(){
        await(await $(homepage.linkAbout)).click();
    }

    async linkLogout(){
        await(await $(homepage.linkLogout)).click();
    }

    async btnCloseMenu(){
        await(await $(homepage.btnCloseMenu)).click();
    }

    async clickCart(){
        await(await $(homepage.cart)).click();
    }

    async selectDropDownNameZtoA(){
        await(await $(homepage.dropDownNameZtoA)).click();
    }

    async selectDropDownNameAtoZ(){
        await(await $(homepage.dropDownNameAtoZ)).click();
    }

    async selectDropDownPriceLowToHigh(){
        await(await $(homepage.dropDownPriceLowtoHigh)).click();
    }

    async selectDropDownPriceHighToLow(){
        await(await $(homepage.dropDownPriceHightoLow)).click();
    }

    async opensauceLabsBackPackProduct(){
        await(await $(homepage.sauceLabsBackPackProduct)).click();
    }

    async opensauceLabsBikeLightProduct(){
        await(await $(homepage.sauceLabsBikeLightProduct)).click();
    }

    async opensauceLabsBoltTshirtProduct(){
        await(await $(homepage.sauceLabsBoltTshirtProduct)).click();
    }

    async opensauceLabsFleeceJacketProduct(){
        await(await $(homepage.sauceLabsFleeceJacketProduct)).click();
    }

    async opensauceLabsOnesieProduct(){
        await(await $(homepage.sauceLabsOnesieProduct)).click();
    }

    async opentestallTheThingsT_shirt_RedProduct(){
        await(await $(homepage.testallTheThingsT_shirt_RedProduct)).click();
    }

    async addToCartsauceLabsBackPackProduct(){
        await(await $(homepage.sauceLabsBackPackAddToCart)).click();
    }

    async addToCartsauceLabsBikeLightProduct(){
        await(await $(homepage.sauceLabsBikeLightAddToCart)).click();
    }

    async addToCartsauceLabsBoltTshirtProduct(){
        await(await $(homepage.sauceLabsBoltTshirtAddToCart)).click();
    }

    async addToCartsauceLabsFleeceJacketProduct(){
        await(await $(homepage.sauceLabsFleeceJacketAddToCart)).click();
    }

    async addToCartsauceLabsOnesieProduct(){
        await(await $(homepage.sauceLabsOnesieAddToCart)).click();
    }

    async addToCarttestallTheThingsT_shirt_RedProduct(){
        await(await $(homepage.testallTheThingsT_shirt_RedAddToCart)).click();
    }

    async verifyTxtProduct(expectedText){
        await expect(await $(homepage.txtProducts).isDisplayed()).to.be.true;
    }

}
module.exports = new HomePage();