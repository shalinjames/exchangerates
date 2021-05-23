import React from "react";
import { Button, Card } from "antd";
import currenciesResponseJson from "../../test/currencies.response.json"
import CurrencySelectBox from "../UI/CurrencySelectBox"

const AddNewCurrencyView = ({ onAddNew, onSelectChange }: Record<string, any>) => {
    const currenciesJson: Record<string, string> = { ...currenciesResponseJson };
    return <Card style={{ width: 300 }}>
        <CurrencySelectBox
            id="from"
            currencies={currenciesJson}
            onSelectChange={(value: string) => onSelectChange(value, 'from')}
            placeholder="From" />
        <CurrencySelectBox
            id="to"
            currencies={currenciesJson}
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