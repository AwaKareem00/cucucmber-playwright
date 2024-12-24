const { When, Then} = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const WikiPage = require('../pages/WikiPage')
const { searchWiki } = require('../pages/WikiPage')

const wikiPage = new WikiPage()

When(/^user should search for "([^"]*)" on wikipedia$/, async function(person){
    await wikiPage.searchWiki(person)
});

Then(/^user should see "([^"]*)" in the title$/, async function(person) {
    const title = await page.title()
    expect(title).toContain(person)
});

Then(/^user should see "([^"]*)" in the URL$/, async function(url) {
    const replace = url.replace(' ', '_')
    const currentURL = await page.url()
    expect(currentURL).toContain(replace)
});

Then(/^user should see "([^"]*)" in the first heading$/, async function(person) {
    await wikiPage.validateHeading(person)
});