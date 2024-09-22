class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = 'button[data-test="checkout"]';
        this.cartItems = '.cart_item .inventory_item_name';
    }

    async getCartItems() {
        return await this.page.locator(this.cartItems).allTextContents();
    }

    async proceedToCheckout() {
        await this.page.click(this.checkoutButton);
    }
}

module.exports = { CartPage };
