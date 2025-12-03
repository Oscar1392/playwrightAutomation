import { chromium, expect, test } from '@playwright/test';

// it.describe('Form Page', () => {

//     test.beforeEach(async () => {
//         console.log('Before each test');
//     });
//     test.afterEach(async () => {
//         console.log('After each test');
//     });
//     test.afterAll(async () => {
//         console.log('After all tests');
//     });    

//     test('Test 1',() => {
//         console.log('Test 1');
//     })
//     test('Test 2',() => {
//         console.log('Test 2');
//     })    
// });

test.describe('FORM PAGE', () => {
    test('Fill the form and submit', async ({page}) => {
    // const browser = await chromium.launch();  
    // const context = await browser.newContext(); 
    // const page = await context.newPage(); 
    await page.pause();
    await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo');
    await page.locator('#name').fill('Oskar Test');
    await page.locator('#inputEmail4')
    .pressSequentially('test@test.com', {delay: 200});
    await page.locator('#inputPassword4').fill('Test1234');
    await page.locator('#company').fill('Oskar Company');
    await page.locator('#websitename').fill('www.oskar.com');
    await page.selectOption('select[name=\'country\']', {label: 'United States'});
    await page.locator('#inputCity').fill('New York');
    await page.locator('#inputAddress1').fill('123 Test St');
    await page.locator('#inputAddress2').fill('Suite 456');
    await page.locator('#inputState').fill('NY');
    await page.locator('#inputZip').fill('10001');
    await page.pause();
    await page.locator('.selenium_btn').click();
    await page.pause();
    await expect(page.getByText('Thanks for contacting us, we will get back to you shortly.')).toBeVisible();
    })
})
