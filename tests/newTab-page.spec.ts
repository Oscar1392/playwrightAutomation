import {expect, test} from '@playwright/test';
import {NewTabPage} from '../page-object/new-tab-page';
import { blockAds } from '../utilities/abortAd';

test.describe('New Tab Page Tests', () => {
    test('Should open new tab', async ({page}) => {
        await blockAds(page);

        const newTabPage = new NewTabPage(page);
        await newTabPage.navigateToNewTabPage();

        const newPage = await newTabPage.newTabOpen();
        const textContent = await newPage.locator('h1').textContent();

        expect(textContent).toContain('Example of a new window page for Automation Testing Practice')
        
    })
});