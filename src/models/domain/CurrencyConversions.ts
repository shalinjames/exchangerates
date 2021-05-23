import { observable, action, makeObservable } from "mobx";
import { getLatestExchangeRate } from "../../webservices/frankfurter";

class CurrencyConversions {

    getUniqueId = () => Date.now();

    conversions: Array<any> = [];

    constructor() {
        makeObservable(this, {
            conversions: observable,
            addConversion: action
        });
        this.addConversion({ from: "EUR", to: "INR" });
    }

    addConversion(conversion: any) {
        getLatestExchangeRate({
            amount: 1,
            ...conversion
        }).then(amount => {
            this.conversions.push({
                ...conversion,
                id: this.getUniqueId(),
                conversion: amount
            });

        });
    }

    getConversions() {
        return this.conversions;
    }
}

export default CurrencyConversions;