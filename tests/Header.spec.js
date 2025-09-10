import {test, expect} from '@playwright/test';

test.describe("Header Component",()=>{

      test.beforeEach(async ({page})=>{
            // we go to the homePage
          await page.goto('/');
      });

      test("Logo is visibile and navigates back to Home Page",async({page})=>{
            const logo = page.locator('header a:has-text("Shoppr")');
            await expect(logo).toBeVisible();
            await logo.click();
            await expect(page).toHaveURL("/");
      });

      test("Search Input toggles when clicking search icon", async({page})=>{
            const searchIcon = page.getByTestId('search-icon');
            await searchIcon.click();
            const searchInput = page.locator('input[placeholder="type here.."]');
            await expect(searchInput).toBeVisible();
            

            await searchInput.fill("shoes");
            await expect(searchInput).toHaveValue("shoes");

      });
      test("Search Input works and navigate to collection page when items typed in it", async({page})=>{
          const searchIcon = page.getByTestId('search-icon');
          await searchIcon.click();
          const searchInput = page.locator('input[placeholder="type here.."]');
          await expect(searchInput).toBeVisible();
          await searchInput.fill("tshirt");
          await expect(page).toHaveURL("/collection");

      });

      
      test("Cart icon shows number of items", async({page})=>{
            const cartlabel = page.locator('label.absolute');
            await expect(cartlabel).toHaveText(/^\d+$/);
      });
      test("login page shows when no user logged", async ({page})=>{
             const logInButton = page.locator('button:has-text("Login")');
             await expect(logInButton).toBeVisible();
      });



});









