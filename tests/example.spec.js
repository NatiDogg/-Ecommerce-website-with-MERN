// tests/cart.spec.js
import { test, expect } from '@playwright/test';
test('should show empty cart message when no items', async ({ page }) => {
  await page.goto('/cart');

  await expect(
    page.getByText(/oops! nothing to display/i)
  ).toBeVisible();
});
