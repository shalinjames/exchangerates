import { Button, Card } from "antd";
import React from "react";

const AddNewCurrency = ({ handleAdd }: Record<string, any>) => <Card style={{ width: 300 }}>
    <Button
        name="addNewCurrency"
        type="link"
        data-testid="add-new-currency"
        onClick={handleAdd}>
        Add New Currency
        </Button>
</Card>

export default AddNewCurrency;