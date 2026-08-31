const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage')
const testData = require('../data/loginData.json');

test ('Log in and save session state', async ({page}) => {
const loginPage = new LoginPage(page);

await loginPage.login(testData.url, testData.username, testData.password);

await page.context().storageState({path: 'state.json'});

}
);
// const loginData=require("../data/loginData.json");
// test.describe('Login Test Automation - Login Flow', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto(loginData.url);
//     });

//     test('Positive Login Test', async ({ page }) => {
//         const username = process.env.USER_NAME;
//         const password = process.env.PASSWORD;
        
//     await page.locator('#username').fill(loginData.username);
//     await page.locator('#password').fill(loginData.password);
//     await page.locator('#submit').click();

//     await expect(page).toHaveURL(/.*logged-in-successfully/);
//     await expect(page.locator('text=successfully logged in')).toBeVisible();
//     await expect(page.locator('text=Log out')).toBeVisible();
//     });


// });