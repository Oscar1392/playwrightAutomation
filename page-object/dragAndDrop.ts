import { expect, Locator, Page, Expect } from "@playwright/test";

export class DragAndDrop {

    private readonly page: Page
    public readonly dragElement: Locator
    public readonly dropZone: Locator
    public readonly dropList: Locator

    public constructor(page:Page){
        this.page = page
        this.dragElement = page.locator('[draggable="true"]')
        this.dropZone = page.locator('#mydropzone') 
        this.dropList = page.locator('#droppedlist') 
    }

    //Add JSDoc to the function

    /**
     * Perform drag and drop using Playwright's dragTo method
     * @param text - Text content of the draggable element
     */

    public async dragAndDropElement(text: string): Promise<void>{
        const dragSource = this.dragElement.filter({hasText: text})
        await dragSource.dragTo(this.dropZone)
        await this.verifyDrop(text)
    }

    /**
     * Perform drag and drop using mouse events
     * @param text - Text content of the draggable element
     */

    public async dragAndDropElementOption2(text: string): Promise<void>{
        const dragSource = this.dragElement.filter({hasText: text})
        await dragSource.hover()
        await this.page.mouse.down()
        await this.dropZone.hover()
        await this.page.mouse.up()
        await this.verifyDrop(text)
    }
    
    /**
     * Verify that the dragged element's text is present in the drop list
     * @param text  - Text to verify in the drop list
     */
    private async verifyDrop(text: string) : Promise<void>{
        const dropListText = await this.dropList.textContent()
        console.log(dropListText, 'dropListText')
        expect(dropListText).toContain(text)

    }

}