import { expect, FrameLocator, test } from '@playwright/test';

test.describe("IFrame Handling", () => {
    test("Handle IFrame Example", async ({ page }) => {
        // Navigate to the page containing the iframe
        await page.goto('https://www.testmu.ai/selenium-playground/nested-frames')

        // Get outer frame (frame-button)

        const frameBottom: FrameLocator = page.frameLocator('[name="frame-bottom"]')

        // Get text content from outer frame
        const leftFrameText: string | null = await frameBottom.frameLocator('[name="frame-left"]').locator('body').textContent()

        const middleFrameText: string | null = await frameBottom.frameLocator('[name="frame-middle"]').locator('body').textContent()

        const rightFrameText: string | null = await frameBottom.frameLocator('[name="frame-right"]').locator('body').textContent()

        console.log('Left Frame Text: ', leftFrameText);
        console.log('Middle Frame Text: ', middleFrameText);
        console.log('Right Frame Text: ', rightFrameText);

        // Assertions
        expect (leftFrameText).toContain('Left')
        expect (middleFrameText).toContain('Middle')
        expect (rightFrameText).toContain('Right')
    })
})