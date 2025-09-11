import {test, expect} from '@playwright/test';



test.describe("Item Component Test",()=>{
      const TestProduct = {
           _id: "123",
           name: "T-shirt",
           description: "comfortable t-shirt",
           category : "Clothing",
           image: ["/img1.png", "/img2.png"],
           offerPrice: 20
      }

     test.beforeEach(async ({page})=>{
         await page.goto("/collection");

     });
     

     test("Renders product info Correctly", async ({page})=>{
             const index = 0;
             const item = page.getByTestId(`item-${index}`);
             await expect(item).toBeVisible();
             const itemName = page.getByTestId(`item-name-${index}`);
             await expect(itemName).toBeVisible();
             const itemDescription = page.getByTestId(`item-desc-${index}`);
             await expect(itemDescription).toBeVisible();
             const itemCategory = page.getByTestId(`item-category-${index}`);
             await expect(itemCategory).toBeVisible();
            

            


     });

     test("Add to Cart button works", async({page})=>{
          const index = 0;
          const btn = page.getByTestId(`item-btn-${index}`);
           await btn.click();
           


     });

});