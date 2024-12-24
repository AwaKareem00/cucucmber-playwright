class PaginationPage {
    constructor(page) {
        this.page = page;
        this.paginationHeading = page.locator('h1:has-text("Pagination")');
        this.worldCityPopulationsHeading = page.locator('h2:has-text("World City Populations 2022")');
        this.paragraph = page.locator('p:has-text("What are the most populated cities in the world?")');
        this.previousButton = page.locator('button:has-text("Previous")');
        this.nextButton = page.locator('button:has-text("Next")');
        this.cityInfo = page.locator('.city-info');
    }

    async navigate() {
        await this.page.goto('https://techglobal-training.com/frontend/project-5');
    }

    async getCityInfo() {
        return await this.cityInfo.textContent();
    }
}
module.exports = PaginationPage;