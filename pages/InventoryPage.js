class InventoryPage {
    constructor(page) {
        this.page = page;
        this.sortDropdown = 'select';
        this.addToCartBackpackButton = 'button[data-test="add-to-cart-sauce-labs-backpack"]';
        this.addToCartBikeLightButton = 'button[data-test="add-to-cart-sauce-labs-bike-light"]';
        this.addToCartFleeceJacketButton = 'button[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
        this.addToCartOnesieButton = 'button[data-test="add-to-cart-sauce-labs-onesie"]';
        this.cartLink = '.shopping_cart_link';
    }

    async sortItemsBy(option) {
        await this.page.selectOption(this.sortDropdown, option);
    }

    async addBackpackToCart() {
        await this.page.click(this.addToCartBackpackButton);
    }

    async addBikeLightToCart() {
        await this.page.click(this.addToCartBikeLightButton);
    }

    async addFleeceJacketToCart() {
        await this.page.click(this.addToCartFleeceJacketButton);
    }

    async addOnesieToCart() {
        await this.page.click(this.addToCartOnesieButton);
    }

    async goToCart() {
        await this.page.click(this.cartLink);
    }

    async getAllProductNames() {
        return await this.page.locator('.inventory_item_name').allTextContents();
    }

    async getAllProductPrices() {
        const prices = await this.page.locator('.inventory_item_price').allTextContents();
        return prices.map(price => parseFloat(price.replace('$', '')));
    }
}

module.exports = { InventoryPage };
