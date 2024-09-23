module.exports = async (page) => {
    await page.type('#user-name', 'standard_user');
    await page.type('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    await page.click('button[data-test="add-to-cart-sauce-labs-onesie"]');
    await page.click('#shopping_cart_container');
    await page.click('#checkout');
 
};
