const { expect } = require('chai');
const orderplacepage = require('./locators/orderplacepage.json')
class OrderplacePage{
    async verifyThankYouMessage(expectedText){
        expect(await $(orderplacepage.txtThankyou)).toHaveTextContaining(expectedText);
    }
}

module.exports = new OrderplacePage();