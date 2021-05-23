import { observable, action, makeObservable } from "mobx"

class CurrencyConversions {

    getUniqueId = () => Date.now();

    conversions = [{ id: this.getUniqueId(), from: "EUR", to: "INR" }];

    constructor() {
        makeObservable(this, {
            conversions: observable,
            addConversion: action
        })
    }

    addConversion(conversion: any) {
        this.conversions.push({
            ...conversion,
            id: this.getUniqueId()
        });
        console.log(this.conversions);
    }

    getConversions() {
        return this.conversions;
    }
}

export default CurrencyConversions;