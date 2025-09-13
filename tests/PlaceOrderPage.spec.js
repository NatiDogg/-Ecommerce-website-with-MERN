import { test, expect } from '@playwright/test';

test.describe('Place Order Page Test', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/place-order'); 
  });

  test('should render delivery form correctly', async ({ page }) => {
    await expect(page).toHaveURL("/place-order");
    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Phone Number')).toBeVisible();
    await expect(page.getByPlaceholder('Street')).toBeVisible();
    await expect(page.getByPlaceholder('City')).toBeVisible();
    await expect(page.getByPlaceholder('State')).toBeVisible();
    await expect(page.getByPlaceholder('Zip Code')).toBeVisible();
    await expect(page.getByPlaceholder('Country')).toBeVisible();
  });

  test('should show error toast if fields are empty', async ({ page }) => {
    await page.getByRole('button', { name: 'Proceed to Order' }).click();
    await expect(page.getByText('please fill all the form fields!!')).toBeVisible();
  });

  test('should submit form successfully and reset fields', async ({ page }) => {
    // Filling all required inputs
    await page.getByPlaceholder('First Name').fill('abebe');
    await page.getByPlaceholder('Last Name').fill('kebede');
    await page.getByPlaceholder('Email').fill('abebe@example.com');
    await page.getByPlaceholder('Phone Number').fill('0912345678');
    await page.getByPlaceholder('Street').fill('123 6kilo St');
    await page.getByPlaceholder('City').fill('Addis Ababa');
    await page.getByPlaceholder('State').fill('AA');
    await page.getByPlaceholder('Zip Code').fill('1000');
    await page.getByPlaceholder('Country').fill('Ethiopia');

    // Click proceed
    await page.getByRole('button', { name: 'Proceed to Order' }).click();

    // Expect login to show 
    await expect(page.getByTestId("login-page")).toBeVisible();
    

    // Check that form resets
    await expect(page.getByPlaceholder('First Name')).toHaveValue('');
    await expect(page.getByPlaceholder('Last Name')).toHaveValue('');
    
    
    await expect(page.getByPlaceholder('Phone Number')).toHaveValue('');
    await expect(page.getByPlaceholder('Street')).toHaveValue('');
    await expect(page.getByPlaceholder('City')).toHaveValue('');
    await expect(page.getByPlaceholder('State')).toHaveValue('');
    await expect(page.getByPlaceholder('Zip Code')).toHaveValue('');
    await expect(page.getByPlaceholder('Country')).toHaveValue('');
  });

  

});
