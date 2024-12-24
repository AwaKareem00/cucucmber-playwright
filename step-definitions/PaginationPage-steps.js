const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const PaginationPage = require('../pages/PaginationPage');

let paginationPage;

Given('the user is on {string}', async function (url) {
    paginationPage = new PaginationPage(this.page);
    await paginationPage.navigate();
});

Then('the user should see the {string} heading', async function (heading) {
    const locator = paginationPage[heading.toLowerCase().replace(/\s+/g, '') + 'Heading'];
    expect(await locator.isVisible()).toBeTruthy();
});

Then('the user should see the {string} paragraph', async function (text) {
    expect(await paginationPage.paragraph.textContent()).toContain(text);
});

Then('the user should see the {string} button is {string}', async function (button, state) {
    const locator = paginationPage[button.toLowerCase() + 'Button'];
    const isDisabled = state === 'disabled';
    expect(await locator.isDisabled()).toBe(isDisabled);
});

When('the user clicks on the {string} button', async function (button) {
    const locator = paginationPage[button.toLowerCase() + 'Button'];
    await locator.click();
});

Then('the user should see {string} City with the info below and an image', async function (city, dataTable) {
    const rows = dataTable.rawTable[1]; // Skip headers
    const [cityName, country, population] = rows;
    const cityInfo = await paginationPage.getCityInfo();
    expect(cityInfo).toContain(cityName);
    expect(cityInfo).toContain(country);
    expect(cityInfo).toContain(population);
});
