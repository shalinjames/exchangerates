import React, { useContext } from "react";
import { RootStoreContext } from "../../models/RootStoreContext";
import RootStore from "../../models/RootStore";
import AddNewCurrencyViewCtrl from "./AddNewCurrencyViewCtrl";
import AddNewCurrencyViewModel from "./AddNewCurrencyViewModel";

const AddCurrency = () => {
    const rootStore = useContext(RootStoreContext);
    const conversionModel = new AddNewCurrencyViewModel(rootStore[RootStore.type.CURRENCY_CONVERSIONS])
    return <AddNewCurrencyViewCtrl viewModel={conversionModel} />
};

export default AddCurrency;