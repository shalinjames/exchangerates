import CurrencyConversions from "./domain/CurrencyConversions";
import Currencies from "./domain/Currencies";

class RootStore {
    static type = {
        CURRENCY_CONVERSIONS: "currencyConversions",
        CURRENCIES: "currencies"
    };

    currencyConversions: CurrencyConversions;
    currencies: Currencies;

    constructor() {
        this.currencyConversions = new CurrencyConversions();
        this.currencies = new Currencies();
    }

    getStores = () => ({
        [RootStore.type.CURRENCY_CONVERSIONS]: this.currencyConversions,
        [RootStore.type.CURRENCIES]: this.currencies
    });
}

export default RootStore;