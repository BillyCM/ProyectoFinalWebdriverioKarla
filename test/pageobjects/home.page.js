const Page = require('./page');

class HomePage extends Page {

    get searchButton() { return $("//input[@value='Buscar']") }
    get fisicaButton() { return $("label[for='phisical']") }
    get lenguajeButton() { return $("label[for='language']") }
    get ocupacionalButton() { return $("label[for='ocupational']") }
    get searchText() { return $("#search-input") }
    get firstResult() { return $("div[class='strip_list'] h3") }

    emptySearch() {
        this.searchButton.click();
    }

    fisicaButtonClick() {
        this.fisicaButton.click();
    }

    lenguajeButtonClick() {
        this.lenguajeButton.click();
    }

    ocupacionalButtonClick() {
        this.ocupacionalButton.click();
    }

    open() {
        return super.open('');
    }
}

module.exports = new HomePage();
