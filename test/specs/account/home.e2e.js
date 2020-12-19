const { homeURL, placeholderText, mariaSearchUrl, nameToSearch } = require('../../helpers/data.helper');

const HomePage = require('../../pageobjects/home.page');
const SearchPage = require('../../pageobjects/search.page');

describe('Home Feature', () => {

    before(() => {

    })

    beforeEach(() => {
        browser.reloadSession();
        HomePage.open();
    })

    it('validates empty search', () => {

        HomePage.emptySearch();

        expect(browser.getUrl()).toBe(homeURL);
    });

    it('validates placeholder text', () => {

        browser.pause(5000);
        HomePage.fisicaButtonClick();
        expect(HomePage.searchText.isFocused()).toBe(true);
        expect(HomePage.searchText.getAttribute('placeholder')).toBe(placeholderText);

        browser.refresh();
        browser.pause(5000);
        HomePage.lenguajeButtonClick();
        expect(HomePage.searchText.isFocused()).toBe(true);
        expect(HomePage.searchText.getAttribute('placeholder')).toBe(placeholderText);

        browser.refresh();
        browser.pause(5000);
        HomePage.ocupacionalButtonClick();
        expect(HomePage.searchText.isFocused()).toBe(true);
        expect(HomePage.searchText.getAttribute('placeholder')).toBe(placeholderText);

    });

    it('validates "Maria" search', () => {

        HomePage.searchText.click();
        HomePage.searchText.setValue('Maria');
        HomePage.searchButton.click();
        console.log(browser.getUrl());
        browser.pause(5000);

        expect(browser.getUrl()).toBe(mariaSearchUrl);
        expect(HomePage.firstResult).toHaveTextContaining(nameToSearch);
    });

});


