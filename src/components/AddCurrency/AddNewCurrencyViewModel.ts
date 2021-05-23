class AddNewCurrencyViewModel {
    store;
    constructor(store: any) {
        this.store = store;
    }

    addNewConversion(conversion: any) {
        this.store.addConversion(conversion);
    }
}

export default AddNewCurrencyViewModel;