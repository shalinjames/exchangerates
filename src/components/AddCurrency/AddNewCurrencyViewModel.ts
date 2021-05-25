import RootStore from "../../models/RootStore";

class AddNewCurrencyViewModel {
    conversionStore;
    currenciesStore;
    constructor(rootStore: any) {
        this.conversionStore = rootStore[RootStore.type.CURRENCY_CONVERSIONS];
        this.currenciesStore = rootStore[RootStore.type.CURRENCIES];
    }

    addNewConversion(conversion: any) {
        this.conversionStore.addConversion(conversion);
    }

    getCurrencies() {
        return this.currenciesStore.getCurrencies();
    }
}

export default AddNewCurrencyViewModel;