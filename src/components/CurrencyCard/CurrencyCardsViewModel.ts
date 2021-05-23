
class CurrencyCardsViewModel {
    store;
    constructor(store: any) {
        this.store = store;
    }

    getConversions = () => {
        return this.store.conversions;
    }
}

export default CurrencyCardsViewModel;