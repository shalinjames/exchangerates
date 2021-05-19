import { Button, Card, Select } from "antd";
import React, { useState } from "react";

const AddNewCurrency = ({ handleAdd }: Record<string, any>) => {
    const { Option } = Select;
    const [currencies, setCurrencies] = useState({ from: "", to: "" })

    const handleAddNew = () => {
        handleAdd(currencies);
    }

    const onSelectChange = (value: string, name: string) => {
        console.log({ value, name })
        setCurrencies({
            ...currencies,
            [name]: value
        })
    }

    return <Card style={{ width: 300 }}>
        <Select style={{ width: 200 }} placeholder="From" showSearch onChange={(value) => onSelectChange(value as string, 'from')}>
            <Option value="EUR">EUR - Euro</Option>
            <Option value="USD">USD - United States Dollar</Option>
            <Option value="INR">INR - Indian Rupee</Option>
        </Select>
        <Select style={{ width: 200 }} placeholder="To" showSearch onChange={(value) => onSelectChange(value as string, 'to')}>
            <Option value="EUR">EUR - Euro</Option>
            <Option value="USD">USD - United States Dollar</Option>
            <Option value="INR">INR - Indian Rupee</Option>
        </Select>
        <Button
            name="addNewCurrency"
            type="link"
            data-testid="add-new-currency"
            onClick={handleAddNew}>
            Add New Currency
        </Button>
    </Card>

}

export default AddNewCurrency;