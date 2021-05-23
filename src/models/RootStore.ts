import CurrencyConversions from "./domain/CurrencyConversions";

class RootStore {
    static type = {
        CURRENCY_CONVERSIONS: "currencyConversions"
    };

    currencyConversions: CurrencyConversions;

    constructor() {
        this.currencyConversions = new CurrencyConversions();
    }

    getStores = () => ({
        [RootStore.type.CURRENCY_CONVERSIONS]: this.currencyConversions
    });
}

export default RootStore;