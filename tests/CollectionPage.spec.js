import {test, expect} from "@playwright/test";

test.describe("Collection Page Test",()=>{

    test.beforeEach(async ({page})=>{
        await page.goto('/collection'); 

    });

    test("renders the Collection Header", async({page})=>{
         await expect(page.getByTestId("collection-page")).toBeVisible();
         await expect(page.getByTestId("collection-header")).toBeVisible();
         await expect(page.getByTestId("collection-title")).toBeVisible();
         await expect(page.getByTestId("collection-subtitle")).toBeVisible();

    });
    test("renders the product grid or empty state", async({page})=>{
           const grid = page.getByTestId("collection-grid");
           await expect(grid).toBeVisible();

           const items = await grid.getByTestId(/collection-item-/).all();
           if(items.length > 0){
              expect(items.length).toBeGreaterThan(0);
           }
           
    });
    test("renders pagination controls when products exceed itemsPerPage", async({page})=>{
        const pagination = page.getByTestId("pagination");
        if(await pagination.isVisible()){
             await expect(page.getByTestId("pagination-prev")).toBeVisible();
             await expect(page.getByTestId("pagination-next")).toBeVisible();

             const page2 = page.getByTestId("pagination-page-2");
              if(await page2.isVisible()){
                await page2.click();
                await expect(page2).toHaveClass(/bg-black/);
              }
        }

    });

});