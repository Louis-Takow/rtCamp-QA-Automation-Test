class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.postalCodeInput = '#postal-code';
        this.continueButton = 'input[type="submit"]';
        this.finishButton = 'button[data-test="finish"]';
        this.completeHeader = '.complete-header';
    }

    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.postalCodeInput, postalCode);
    }

    async continueCheckout() {
        await this.page.click(this.continueButton);
    }

    async finishCheckout() {
        await this.page.click(this.finishButton);
    }

    async getOrderConfirmationMessage() {
        return await this.page.locator(this.completeHeader).textContent();
    }
}

module.exports = { CheckoutPage };
