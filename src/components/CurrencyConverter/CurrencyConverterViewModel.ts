import RootStore from "../../models/RootStore";

class CurrencyConverterViewModel {
    currenciesStore;

    constructor(currenciesStore: any) {
        this.currenciesStore = currenciesStore;
    }

    getCurrencies = () => this.currenciesStore.getCurrencies();

}

export default CurrencyConverterViewModel;