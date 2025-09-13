import {test, expect} from '@playwright/test';
test.describe("Cart Page Tests",()=>{

    test("Cart shows empty state, add product and manage cart", async({page})=>{
        // step1: go to cart page
         await page.goto('/cart');
         await expect(page.getByTestId("cart-empty-message")).toBeVisible();

         // step2: navigate to collection page via Header
           await page.getByRole("link",{name: /collection/i}).click();
           await expect(page).toHaveURL("/collection");

           const firstItem = page.getByTestId("item-image-0");
           await firstItem.click();
            // step3: and we go to product details page and select size and click add to cart button
            await expect(page.getByTestId("product-details-page")).toBeVisible();
            await page.getByTestId("size-option-M").click();
            await page.getByTestId("add-to-cart").click();

            await page.getByTestId('cart-icon').click();
            await expect(page.getByTestId("cart-page")).toBeVisible();

            //step 4:  verify cart item is added

            const cartItem = page.getByTestId("cart-item-0");
            await expect(cartItem).toBeVisible();
            await expect(page.getByTestId("cart-item-name-0")).not.toBeEmpty();
            await expect(page.getByTestId("cart-item-size-0")).toHaveText(/M/);

            //step 5   quantity controls
            const qty = page.getByTestId("cart-item-qty-0");
            await expect(qty).toHaveText("1");

            await page.getByTestId("cart-item-increment-0").click();
             await expect(qty).toHaveText("2");
             await page.getByTestId("cart-item-decrement-0").click();
             await expect(qty).toHaveText("1");
             
             // checking remove item
             await page.getByTestId("cart-item-remove-0").click();
             await expect(page.getByTestId("cart-empty-message")).toBeVisible();

              // finally to check the proceed to delivery btn works ornot

              await page.getByRole("link",{name: /collection/i}).click();
              await page.getByTestId("item-image-0").click();
              await page.getByTestId("size-option-L").click();
              await page.getByTestId("add-to-cart").click();
               await page.getByTestId("cart-icon").click();
               await page.getByTestId("proceed-to-delivery").click();
               await expect(page).toHaveURL("/place-order");









           


    });

});