import { Page, Locator } from "@playwright/test";

export class NewTabPage {
    private readonly page: Page;
    public readonly newTabLink: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.newTabLink = page.locator('a[href="/windows/new"]')
    }

    public async navigateToNewTabPage(): Promise<void> {
        const url = 'https://practice.expandtesting.com/windows';
        await this.page.goto(url);
    }

    public async newTabOpen(): Promise<Page> {

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), //we wait for the new tab to open
            this.newTabLink.click() // Opens a new tab
        ]);

        await newPage.waitForLoadState(); // Wait for the new tab to load completely
        return newPage;
    }
}