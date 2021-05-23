import React from "react";
import { Select } from "antd";

const CurrencySelectBox = ({ id, currencies, onSelectChange, placeholder }: Record<string, any>) => {
    const { Option } = Select;
    return <Select style={{ width: 200 }} id={id} placeholder={placeholder} showSearch onChange={onSelectChange}>
        {
            Object.keys(currencies).map((currency) => {
                return <Option key={currency} value={currency}>{currency}-{currencies[currency]}</Option>
            })
        }
    </Select>
}

export default CurrencySelectBox;