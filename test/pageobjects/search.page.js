const Page = require('./page');

class SearchPage extends Page {

    get firstResult() { return $("div[class='strip_list'] h3") }
    get fisicaButton() { return $("//a[normalize-space()='Física']") }
    get lenguajeButton() { return $("//a[normalize-space()='Lenguaje']") }
    get ocupacionalButton() { return $("//a[normalize-space()='Ocupacional']") }
    get searchTextInput() { return $("//input[@placeholder='Ejemplo: Nombre, Especialidad...']") }
    get searchButton() { return $("input[value='Buscar']") }
    get listViewButton() { return $("//a[@class='active']") }
    get mapDiv() { return $("div#map") }
    get perfilCompletoLink() { return $("a[class='btn_listing']") }

    fisicaButtonClick() {
        this.fisicaButton.click();
    }

    lenguajeButtonClick() {
        this.lenguajeButton.click();
    }

    ocupacionalButtonClick() {
        this.ocupacionalButton.click();
    }

    searchButtonClick() {
        this.searchButton.click();
    }

    open() {
        return super.open('/#/search');
    }

}

module.exports = new SearchPage();