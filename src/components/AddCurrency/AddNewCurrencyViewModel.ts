import RootStore from "../../models/RootStore";

class AddNewCurrencyViewModel {
    conversionStore;
    currenciesStore;
    constructor({ [RootStore.type.CURRENCY_CONVERSIONS]: conversionStore,
        [RootStore.type.CURRENCIES]: currenciesStore }:
        Record<string, any>) {
        this.conversionStore = conversionStore;
        this.currenciesStore = currenciesStore;
    }

    addNewConversion(conversion: any) {
        this.conversionStore.addConversion(conversion);
    }

    getCurrencies() {
        return this.currenciesStore.getCurrencies();
    }
}

export default AddNewCurrencyViewModel;