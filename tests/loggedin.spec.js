const {test, expect} = require('@playwright/test');
const testData=require("../data/loginData.json");

test('Validate Page After Logging In' ,async ({page}) => {

await page.goto(loginData.url)
await expect(page).toHaveURL(/.*logged-in-sucessfully/);
const successMessage = page.locator('.post-title');
await expect(successMessage).toHaveText('Logged in Sucessfully');
});