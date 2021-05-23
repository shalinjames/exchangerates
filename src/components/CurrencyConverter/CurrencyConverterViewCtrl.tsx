import React from "react";
import { observer } from "mobx-react";
import CurrencyConverterView from "./CurrencyConverterView";

const CurrencyConverterViewCtrl = (props: any) => {
    const { viewModel, from, to } = props;
    const currencies = viewModel.getCurrencies();

    return <CurrencyConverterView
        displayValueFrom={currencies[from]}
        displayValueTo={currencies[to]}
        conversion={props.conversion}
    />
}

export default observer(CurrencyConverterViewCtrl);