const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Visual Testing on Login Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    // Visual Test: Take a screenshot of the login page
    await page.screenshot({ path: 'screenshots/login.png' });
});

test('Visual Testing on Inventory Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000); // Wait for 2 seconds
    // Visual Test: Take a screenshot of the inventory page
    await page.screenshot({ path: 'screenshots/inventory.png' });
});

test('Visual Testing on Cart Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();

    // Visual Test: Take a screenshot of the cart page
    await page.screenshot({ path: 'screenshots/cart.png' });
});

test('Visual Testing on Checkout Stepone Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    
    // Visual Test: Take a screenshot of the checkout Step-one page
    await page.screenshot({ path: 'screenshots/checkoutStepOne.png' });
});
test('Visual Testing on Checkout Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
    await checkoutPage.continueCheckout();
    
    // Visual Test: Take a screenshot of the checkout page
    await page.screenshot({ path: 'screenshots/checkout.png' });
});
