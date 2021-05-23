import React, { useContext } from "react";
import { RootStoreContext } from "../../models/RootStoreContext";
import RootStore from "../../models/RootStore";
import AddNewCurrencyViewCtrl from "./AddNewCurrencyViewCtrl";
import AddNewCurrencyViewModel from "./AddNewCurrencyViewModel";

const AddCurrency = () => {
    const rootStore = useContext(RootStoreContext);
    const conversionModel = new AddNewCurrencyViewModel({
        [RootStore.type.CURRENCY_CONVERSIONS]: rootStore[RootStore.type.CURRENCY_CONVERSIONS],
        [RootStore.type.CURRENCIES]: rootStore[RootStore.type.CURRENCIES],
    })
    return <AddNewCurrencyViewCtrl viewModel={conversionModel} />
};

export default AddCurrency;