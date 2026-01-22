import { FullConfig, chromium, devices } from '@playwright/test';

async function globalSetup(config:FullConfig){
    const browser = await chromium.launch();  
    const context = await browser.newContext(); 
    const page = await context.newPage(); 

    await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded'});
    await page.getByPlaceholder('Username').fill('Oskar_test');
    await page.getByPlaceholder('Password').fill('Test_12345!');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.waitForURL('https://demoqa.com/profile');

    const user = await page.locator('#userName-value').innerText();
    if(user !== 'Oskar_test'){
        throw new Error('Authentication failed during global setup');
    }
    await context.storageState({path: './.auth/user.json'});
    await browser.close();
}
export default globalSetup;