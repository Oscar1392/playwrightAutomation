import { chromium, expect, test } from '@playwright/test';

test.describe('FORM PAGE', () => { 
     test('Fill the form and submit', async ({page}) => {
    await page.pause();
    await page.goto('https://testpages.eviltester.com/pages/forms/html-form/');
    await page.locator('input[name="username"]').fill('oskar_test');
    await page.locator('input[name="password"]').fill('Test12345');
    await page.locator('textarea[name="comments"]').fill('Test text for comments');
    await page.setInputFiles('input[name="filename"]', 'tests/files/JPG_Test.jpg');
    await page.check('input[type="checkbox"][value="cb1"]');
    await page.check('input[type="radio"][value="rd1"]');
    await page.selectOption('select[name="multipleselect[]"]', [
    { label: 'Selection Item 1' }
    ]);
    await page.selectOption('select[name="dropdown"]', { label: 'Drop Down Item 4' });
    await page.locator('//input[@type="submit" and @value="submit"]').click();
    await page.pause();
    await expect(page.getByText('Submitted Values')).toBeVisible();
    await expect(page.getByText('oskar_test')).toBeVisible();
    await page.pause();
    })
});