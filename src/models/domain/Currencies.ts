import { observable, action, makeObservable } from "mobx";
import { getCurrencies } from "../../webservices/frankfurter";

class Currencies {
    currencies: Object = {};

    constructor() {
        makeObservable(this, {
            currencies: observable,
            fetchCurrencies: action
        });
        this.fetchCurrencies();
    }

    getCurrencies() {
        return this.currencies;
    }

    fetchCurrencies() {
        getCurrencies()
            .then(currencies => {
                this.currencies = currencies;
            })
    }
}

export default Currencies;