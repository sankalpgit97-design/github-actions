const {test, expect} = require('@playwright/test');
const loginData=require("../data/loginData.json");

test('Sucessfull Login Test using JSON Data' ,async ({page}) => {
await page.goto(testData.url);

await page.locator('#username').fill(testData.username);
await page.locator('#password').fill(testData.password);
await page.locator('#submit').click();





});





