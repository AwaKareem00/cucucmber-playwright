class PaginationPage {
    constructor(page) {
        this.page = page;
        this.paginationHeading = page.locator('.is-size-3');
        this.worldCityPopulationsHeading = page.locator('#sub_heading');
        this.paragraph = page.locator('p:has-text("What are the most populated cities in the world?")');
        this.previousButton = page.locator('#previous');
        this.nextButton = page.locator('#next');
        this.cityInfo = page.locator('.city_info');
    }

    async navigate() {
        await this.page.goto('https://techglobal-training.com/frontend/project-5');
    }

    async getCityInfo() {
        return await this.cityInfo.textContent();
    }
}
module.exports = PaginationPage;