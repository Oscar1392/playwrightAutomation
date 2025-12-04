import { chromium, expect, test } from '@playwright/test';

test.describe('HTML FORM PAGE', () => { 
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

test.describe('DEMO QA FORM PAGE', () => { 
     test('Fill the form and submit', async ({page}) => {
    await page.pause();
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.pause();    
    await page.locator('#firstName').fill('oskar');
    await page.locator('#lastName').fill('test');    
    await page.locator('#userEmail').fill('test@test.com');
    const maleLabel = page.locator('label[for="gender-radio-1"]');
    await maleLabel.scrollIntoViewIfNeeded();
    await maleLabel.click();
    await expect(page.locator('#gender-radio-1')).toBeChecked();
    await page.locator('#userNumber').fill('1234561212');
    await page.fill('#dateOfBirthInput', '13 Aug 1992');
    await page.locator('#subjectsInput').fill('test');     
    await page.setInputFiles('#uploadPicture', 'tests/files/JPG_Test.jpg');
    await page.locator('#currentAddress').fill('testing text address');     
    await page.fill('#react-select-3-input', 'Rajasthan');
    await page.pause();  
    await page.click('#submit');
    await page.pause();    
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
    await page.pause();
    })
});


