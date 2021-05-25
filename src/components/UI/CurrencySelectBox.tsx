import React from "react";
import Select from '@material-ui/core/Select';

const CurrencySelectBox = ({ id, currencies, onSelectChange, placeholder }: Record<string, any>) => {
    return <Select style={{ width: 200 }} placeholder={placeholder} onChange={onSelectChange} native name={id} >
        {
            Object.keys(currencies).map((currency) => {
                return <option key={currency} value={currency}>{currency}-{currencies[currency]}</option>
            })
        }
    </Select>
}

export default CurrencySelectBox;