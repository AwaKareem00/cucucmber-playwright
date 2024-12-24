const { expect } = require('@playwright/test')
const locators = Object.freeze({
  searchBox: '#searchInput',
  heading: '#firstHeading',

})

class WikiPage {
  locators = locators

  async searchWiki(name) {
    await page.locator(locators.searchBox).fill(name)
    await page.locator(locators.searchBox).press('Enter')
  }

  async validateHeading(name){
    const heading = await page.locator(this.locators.heading).textContent()
    expect(heading).toContain(name)
  }
}

module.exports = WikiPage