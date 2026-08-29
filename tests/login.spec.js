const {test, expect} = require('@playwright/test');
const loginData=require("../data/loginData.json");
test.describe('Login Test Automation - Login Flow', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(loginData.url);
    });

    test('Positive Login Test', async ({ page }) => {
        const username = process.env.USER_NAME;
        const password = process.env.PASSWORD;
        
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#submit').click();

    await expect(page).toHaveURL(/.*logged-in-successfully/);
    await expect(page.locator('text=successfully logged in')).toBeVisible();
    await expect(page.locator('text=Log out')).toBeVisible();
    });

    test('Negative username test', async ({ page }) => {
        await page.locator('#username').fill(loginData.incorrectUser);
        await page.locator('#password').fill('Password123');
        await page.locator('#submit').click();

    const error = page.locator('#error');
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Your username is invalid!');
    });

    test('Negative password test', async ({ page }) => {
        await page.locator('#username').fill('student');
        await page.locator('#password').fill(loginData.incorrectPassword);
        await page.locator('#submit').click();

        const error = page.locator('#error');
        await expect(error).toBeVisible();
        await expect(error).toHaveText('Your password is invalid!');
    });
});