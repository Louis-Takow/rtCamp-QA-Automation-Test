const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

// After each test, capture a screenshot if the test fails
test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  }
});

test('Verify Sorting Order Z-A on All Items Page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Sort items Z-A
  await inventoryPage.sortItemsBy('za');

  // Validate sorting order
  const productNames = await inventoryPage.getAllProductNames();
  const sortedProductNames = [...productNames].sort((a, b) => b.localeCompare(a));
  expect(productNames).toEqual(sortedProductNames);
});

test('Verify Price Order High-Low on All Items Page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Sort items by Price High to Low
  await inventoryPage.sortItemsBy('hilo');

  // Validate price order
  const productPrices = await inventoryPage.getAllProductPrices();
  const sortedPrices = [...productPrices].sort((a, b) => b - a);
  expect(productPrices).toEqual(sortedPrices);
});

test('Add Multiple Items to Cart and Validate Checkout Journey', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add multiple items to the cart
  await inventoryPage.addBackpackToCart();
  await inventoryPage.addBikeLightToCart();
  await inventoryPage.addFleeceJacketToCart();
  await inventoryPage.addOnesieToCart();
  await inventoryPage.goToCart();

  // Validate that all items are in the cart
  const cartItems = await cartPage.getCartItems();
  expect(cartItems).toContain('Sauce Labs Backpack');
  expect(cartItems).toContain('Sauce Labs Bike Light');
  expect(cartItems).toContain('Sauce Labs Fleece Jacket');
  expect(cartItems).toContain('Sauce Labs Onesie');

  // Proceed to checkout
  await cartPage.proceedToCheckout();

  // Fill in checkout information and complete purchase
  await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
  await checkoutPage.continueCheckout();

  // Validate that items are in the checkout overview
  const overviewItems = await page.locator('.cart_item .inventory_item_name').allTextContents();
  const cleanedOverviewItems = overviewItems.map(item => item.trim());
  expect(cleanedOverviewItems).toContain('Sauce Labs Backpack');
  expect(cleanedOverviewItems).toContain('Sauce Labs Bike Light');
  expect(cleanedOverviewItems).toContain('Sauce Labs Fleece Jacket');
  expect(cleanedOverviewItems).toContain('Sauce Labs Onesie');

  // Extract prices from the cart
  const itemPrices = await page.locator('.cart_item .inventory_item_price').allTextContents();
  const prices = itemPrices.map(price => parseFloat(price.replace('$', '')));

  // Calculate the total sum of prices
  const totalSum = prices.reduce((acc, curr) => acc + curr, 0);

  // Get the total displayed on the checkout overview
  const displayedTotalText = await page.locator('.summary_subtotal_label').textContent();
  const displayedTotal = parseFloat(displayedTotalText.replace('Item total: $', ''));

  // Assert that the calculated total matches the displayed total
  expect(totalSum).toBe(displayedTotal);

  // Finish the checkout
  await checkoutPage.finishCheckout();

  // Validate order confirmation
  const confirmationMessage = await checkoutPage.getOrderConfirmationMessage();
  expect(confirmationMessage).toBe('Thank you for your order!');
});
