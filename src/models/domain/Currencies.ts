import { observable, action, makeObservable } from "mobx";
import { getCurrencies } from "../../webservices/frankfurter";

class Currencies {
    currencies: Array<Record<string, string>> = [];

    constructor() {
        makeObservable(this, {
            currencies: observable,
            getCurrencies: action
        });
        this.fetchCurrencies();
    }

    getCurrencies() {
        return this.currencies;
    }

    fetchCurrencies() {
        getCurrencies()
            .then(currencies => {
                this.currencies.concat(currencies);
            })
    }
}

export default Currencies;