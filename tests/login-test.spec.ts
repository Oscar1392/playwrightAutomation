import {test, expect} from '@playwright/test';


test.describe('UI tests', () =>{
    test.beforeEach(async ({page})=>{
        await page.goto('https://demoqa.com/login')
    })
    test('Verify authentication and log out button', async ({page, browserName})=>{
        await page.goto('https://demoqa.com/books');
        const logOutButton = page.locator('#submit');
        
        await expect(logOutButton).toHaveText('Log out');

        await page.screenshot({path: `screenshots/${browserName}-profile.png`});

    })
})    