// const { $ } = require('@wdio/globals')
const Page = require('./page');
const Login = require('./locators/login.json')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await $(Login.inpBxUsername).setValue(username);
        await $(Login.inpBxPassword).setValue(password);
        await $(Login.btnLogin).click();
    }

    async setUsername(username){
        await $(Login.inpBxUsername).setValue(username);
    }

    async setPassword(password){
        await $(Login.inpBxPassword).setValue(password);
    }

    async clickLogin(){
        await $(Login.btnLogin).click();
    }

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
