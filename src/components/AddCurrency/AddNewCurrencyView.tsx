import React from "react";
import { Button, Card } from "antd";
import CurrencySelectBox from "../UI/CurrencySelectBox"

const AddNewCurrencyView = ({ onAddNew, onSelectChange, currencies }: Record<string, any>) => {
    return <Card style={{ width: 300 }}>
        <CurrencySelectBox
            id="from"
            currencies={currencies}
            onSelectChange={(value: string) => onSelectChange(value, 'from')}
            placeholder="From" />
        <CurrencySelectBox
            id="to"
            currencies={currencies}
            onSelectChange={(value: string) => onSelectChange(value, 'to')}
            placeholder="To" />
        <Button
            name="addNewCurrency"
            type="link"
            data-testid="add-new-currency"
            onClick={onAddNew}>
            Add
        </Button>
    </Card>
}

export default AddNewCurrencyView;