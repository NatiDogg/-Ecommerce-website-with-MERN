import { test, expect } from '@playwright/test';

test.describe('Product Details Page', () => {
  test('should display product info and add to cart', async ({ page }) => {
    
    await page.goto('/collection/men/2');

    // Ensure page loaded
    await expect(page.getByTestId('product-details-page')).toBeVisible();

    // Check product info
    await expect(page.getByTestId('product-title')).toBeVisible();
    await expect(page.getByTestId('product-description')).toBeVisible();
    await expect(page.getByTestId('product-main-image')).toBeVisible();

    // Select a size
    await page.getByTestId('size-option-M').click();

    // Add to cart
    await page.getByTestId('add-to-cart').click();
  });
});

