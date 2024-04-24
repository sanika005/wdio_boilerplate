const shippingpage = require('./locators/shipping.json')
class ShippingPage{
    async shippingdetails (first_name, last_name, postal_code){
        await (await $(shippingpage.inpBxFirstName)).setValue(first_name);
        await (await $(shippingpage.inpBxLastName)).setValue(last_name);
        await (await $(shippingpage.inpBxPostalCode)).setValue(postal_code);
        await $(shippingpage.btnContinue).click();
        await $(shippingpage.btncancel).click();
    }
}

module.exports = new ShippingPage();