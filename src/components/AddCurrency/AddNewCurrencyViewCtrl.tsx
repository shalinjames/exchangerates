import React, { useState } from "react";
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
        console.log(value);
        setCurrencies({
            ...currencies,
            [name]: value
        })
    }
    // TODO: Fetch the currencies and display them here
    return <AddNewCurrencyView onAddNew={onAddNew} onSelectChange={onSelectChange} />

}

export default AddNewCurrencyViewCtrl;