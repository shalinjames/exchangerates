import RootStore from "../../models/RootStore";

class CurrencyCardsViewModel {

    currenciesStore;
    conversionStore;

    constructor(rootStore: any) {
        this.currenciesStore = rootStore[RootStore.type.CURRENCIES];
        this.conversionStore = rootStore[RootStore.type.CURRENCY_CONVERSIONS];
    }

    getConversions = () => this.conversionStore.getConversions();

    getCurrencies = () => this.currenciesStore.getCurrencies();
}

export default CurrencyCardsViewModel;