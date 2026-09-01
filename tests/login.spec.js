const {test, expect} = require('@playwright/test');
const  loginData = require('../data/loginData.json');

test('Sucessfull Login Test using JSON Data' ,async ({page,context}) => {

await page.goto(loginData.loginUrl);

await page.locator('#username').fill(loginData.username);
await page.locator('#password').fill(loginData.password);
await page.locator('#submit').click();

await expect(page).toHaveURL(loginData.dashboardUrl);

await page.context().storageState({path: '.auth/user.json'});
});