const {test, expect} = require('@playwright/test');
const loginData=require("../data/loginData.json");

test('Sucessfull Login Test using JSON Data' ,async ({page}) => {
await page.goto(loginData.url);

await page.locator('#username').fill(loginData.username);
await page.locator('#password').fill(loginData.password);
await page.locator('#submit').click();





});





