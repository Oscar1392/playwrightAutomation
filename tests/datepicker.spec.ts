import {test, expect} from '@playwright/test';
import {DatePicker} from '../page-object/date-picker';
// import {test} from '../page-object/base-page';

test.describe('DATE PICKER PAGE', () => {
    test('Navigate to Date Picker page', async ({page}) => {
        const datePicker = new DatePicker(page)
        await datePicker.navigateToDatePicker()
        await datePicker.verifyHeader()
        await datePicker.dateFromToday()
        console.log(page.url());
        await expect(page).toHaveURL(/jquery-date-picker-demo/);
    })
});

// test.describe('DATE PICKER PAGE', () => {
//     test('Navigate to Date Picker page', async ({datePicker}) => {
//         await datePicker.navigateToDatePicker()
//         await datePicker.verifyHeader()
//         await datePicker.dateFromToday()
//     })
// });