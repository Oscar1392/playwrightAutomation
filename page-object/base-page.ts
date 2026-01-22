import {test as base} from '@playwright/test';
import { DatePicker } from '../page-object/date-picker';

export const test = base.extend<{
    datePicker: DatePicker
}>({
    datePicker: async ({page}, use) => {
        await use(new DatePicker(page));
    }
})