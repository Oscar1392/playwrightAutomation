import {test} from '@playwright/test';
import {DragAndDrop} from '../page-object/dragAndDrop';

test.describe('Date Picker', () => {
    test('Drag and Drop Test', async ({page}) => {
        const dragAndDrop = new DragAndDrop(page);
        // Navigate to Drag and Drop page
        const url = 'https://www.testmu.ai/selenium-playground/drag-and-drop-demo/'
        await page.goto(url);

        // Perform Drag and Drop action
        await dragAndDrop.dragAndDropElement('Draggable 1');
        await dragAndDrop.dragAndDropElement('Draggable 2');
        
        await page.reload();

        await dragAndDrop.dragAndDropElementOption2('Draggable 1');
        await dragAndDrop.dragAndDropElementOption2('Draggable 2');
    });
})