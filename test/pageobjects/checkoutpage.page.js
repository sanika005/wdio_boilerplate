const checkoutpage = require('./locators/checkoutpage.json')
class CheckoutPage{
    async btnCancel(){
        await(await $(checkoutpage.cancelBtn)).click();
    }

    async btnFinish(){
        await(await $(checkoutpage.finishBtn)).click();
    }
}

module.exports = new CheckoutPage();