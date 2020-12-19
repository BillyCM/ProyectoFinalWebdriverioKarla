const { urlFisica, urlLenguaje, urlOcupacional, mariaResultsUrl, nameToSearch, mariaPageUrl, mariaWebServiceUrl } = require('../../helpers/data.helper');

const SearchPage = require('../../pageobjects/search.page');

describe('Search Tests', () => {

    before(() => {

    })

    beforeEach(() => {
        browser.reloadSession();
        SearchPage.open();
    })

    it('validates correct url according to category', () => {

        SearchPage.fisicaButtonClick();
        expect(browser.getUrl()).toBe(urlFisica);

        SearchPage.lenguajeButtonClick();
        expect(browser.getUrl()).toBe(urlLenguaje);

        SearchPage.ocupacionalButtonClick();
        expect(browser.getUrl()).toBe(urlOcupacional);

    });

    it('validates correct results', () => {

        SearchPage.searchTextInput.click();
        SearchPage.searchTextInput.setValue('Maria');
        SearchPage.searchButtonClick();
        browser.pause(5000);
        expect(SearchPage.firstResult).toHaveTextContaining(nameToSearch);

    });

    it('should hides map', () => {
        SearchPage.listViewButton.click();
        expect(SearchPage.mapDiv.isDisplayed()).toBeFalsy();
    });

    /*  it('verify correct call to web service', () => {
          /*SearchPage.searchTextInput.click();
          SearchPage.searchTextInput.setValue('Maria');
          SearchPage.searchButtonClick();
          console.log(browser.getUrl());
          browser.waitUntil(
              () => browser.getUrl() === mariaResultsUrl,
              {
                  timeout: 5000,
                  timeoutMsg: 'expected text to be different after 5s'
              }
          );
          SearchPage.perfilCompletoLink.click();
          browser.pause(5000);
          browser.url(mariaPageUrl);
          browser.expectRequest('GET', mariaWebServiceUrl, 200);
      });*/




});
