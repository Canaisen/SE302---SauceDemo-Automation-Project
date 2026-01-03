const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page-objects/LoginPage');
const { InventoryPage } = require('../page-objects/InventoryPage');
const { CartPage } = require('../page-objects/CartPage');
const { CheckoutPage } = require('../page-objects/CheckoutPage');

test.describe('SauceDemo E2E Test Suite', () => {
    let loginPage, inventoryPage, cartPage, checkoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        await loginPage.navigate();
    });

    // Smoke tests
    test('Smoke: Successful Login', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(inventoryPage.inventoryList).toBeVisible();
    });

    test('Smoke: Logout Flow', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.logout();
        await expect(loginPage.loginButton).toBeVisible();
    });

    //  Normal and Negative tests
    test('Negative: Missing Postal Code on Checkout', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.addItemToCart('Sauce Labs Backpack');
        await inventoryPage.cartLink.click();
        await cartPage.checkoutButton.click();
        
        
        await checkoutPage.firstName.fill('Can');
        await checkoutPage.lastName.fill('Aysen');
        await checkoutPage.continueButton.click();
        await expect(loginPage.errorMessage).toContainText('Postal Code is required');
    });

    test('Positive: Complete Purchase Flow', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.addItemToCart('Sauce Labs Onesie');
        await inventoryPage.cartLink.click();
        await cartPage.checkoutButton.click();
        
       
        await checkoutPage.fillInformation('Atacan', 'Acar', '34000');
        await checkoutPage.finishButton.click();
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    });

    test('Positive: Inventory Reset Check', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.addItemToCart('Sauce Labs Bike Light');
        
        
        await inventoryPage.menuButton.click();
        await inventoryPage.resetLink.click();
        await expect(inventoryPage.cartBadge).not.toBeVisible();
    });
});