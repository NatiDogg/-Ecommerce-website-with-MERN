import {test, expect} from '@playwright/test';


test.describe("Home Page Test", ()=>{
    test.beforeEach(async ({page})=>{
         await page.goto("/");

    });

    test("Renders Hero Component",async ({page})=>{
           const Hero = page.getByTestId("hero-section");
           await expect(Hero).toBeVisible();
           await expect(Hero).toContainText("on Coats & Jackets");
           const shopNowButton = Hero.getByRole('link', {name: "Shop Now"});
           await expect(shopNowButton).toBeVisible();
           await expect(shopNowButton).toHaveAttribute('href','/collection');
    });

    test("Renders Features Component", async ({page})=>{
                 const Features = page.getByTestId("features-section");
                 await expect(Features).toBeVisible();
    });

    test("Renders Categories Component", async ({page})=>{
          const Categories = page.getByTestId("categories-section");
          await expect(Categories).toBeVisible();
          const categoryImages = Categories.locator('img');
          const imageCount = await categoryImages.count();
          expect(imageCount).toBeGreaterThan(0);


    });
    test('renders Popular Products section', async ({ page }) => {
    const popularProducts = page.getByTestId('popularProducts-section');
    await expect(popularProducts).toBeVisible();
    
    const slides = popularProducts.locator('.swiper-slide');
    const slideCount = await slides.count();
     expect(slideCount).toBeGreaterThan(0);
    });

    test('renders Banner image', async ({ page }) => {
    const banner = page.getByRole('img', { name: 'bannerImg' });
    await expect(banner).toBeVisible();
    });

    test('renders Blog section', async ({ page }) => {
    const blog = page.getByTestId('blog-section');
    await expect(blog).toBeVisible();
    });
        
})