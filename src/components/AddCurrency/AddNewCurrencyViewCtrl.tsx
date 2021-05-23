import React, { useState } from "react";
import { observer } from "mobx-react";
import AddNewCurrencyView from "./AddNewCurrencyView";


const AddNewCurrencyViewCtrl = ({ viewModel }: Record<string, any>) => {
    const [currencies, setCurrencies] = useState({ from: "", to: "" });

    const onAddNew = () => {
        const { from, to } = currencies;
        console.log(currencies);
        if (from && to && from !== to) {
            viewModel.addNewConversion(currencies);
        }
    }

    const onSelectChange = (value: string, name: string) => {
        setCurrencies({
            ...currencies,
            [name]: value
        })
    }
    // TODO: Fetch the currencies and display them here
    return <AddNewCurrencyView onAddNew={onAddNew} onSelectChange={onSelectChange} currencies={viewModel.getCurrencies()} />

}

export default observer(AddNewCurrencyViewCtrl);