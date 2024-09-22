const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { injectAxe, checkA11y } = require('axe-playwright');

test.describe('Accessibility tests for Sauce Demo App', () => {
  
  test('Accessibility test for Login Page', async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.navigate();

      // Inject axe-core for accessibility testing
      await injectAxe(page);

      // Run accessibility checks on the login page
      await checkA11y(page);
  });

  test('Accessibility test for Inventory Page', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      await loginPage.navigate();
      await loginPage.login('standard_user', 'secret_sauce');

      // Inject axe-core for accessibility testing
      await injectAxe(page);

      // Run accessibility checks on the inventory page
      await checkA11y(page);
  });

  test('Accessibility test for Cart Page', async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);
      const cartPage = new CartPage(page);

      await loginPage.navigate();
      await loginPage.login('standard_user', 'secret_sauce');
      await inventoryPage.addBackpackToCart();
      await inventoryPage.goToCart();

      // Inject axe-core for accessibility testing
      await injectAxe(page);

      // Run accessibility checks on the cart page
      await checkA11y(page);
  });

  test('Accessibility test for Checkout Step One Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBackpackToCart();
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();

    // This is the step where you are on Checkout Step One Page
    await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');

    // Inject axe-core for accessibility testing
    await injectAxe(page);

    // Run accessibility checks on the checkout-step-one page
    await checkA11y(page);
});
  test('Accessibility test for Checkout overview Page', async ({ page }) => {
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

      // Inject axe-core for accessibility testing
      await injectAxe(page);

      // Run accessibility checks on the checkout page
      await checkA11y(page);
  });

});
