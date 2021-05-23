import React, { useContext } from "react";
import { RootStoreContext } from "../../models/RootStoreContext";
import RootStore from "../../models/RootStore";
import CurrencyConverterViewCtrl from "./CurrencyConverterViewCtrl";
import CurrencyConverterViewModel from "./CurrencyConverterViewModel";


const CurrencyConverter = (props: Record<string, string>) => {
    const rootStore = useContext(RootStoreContext);
    const viewModel = new CurrencyConverterViewModel(rootStore[RootStore.type.CURRENCIES])

    return <CurrencyConverterViewCtrl viewModel={viewModel} {...props} />

}

export default CurrencyConverter;