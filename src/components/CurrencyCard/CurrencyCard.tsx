import React from 'react';
import { Col, Card } from 'antd';
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter"

interface CurrencyCardProps {
    from: string,
    to: string,
    conversion: string
}

const CurrencyCard = (props: CurrencyCardProps) => {
    return <Col span={5}>
        <Card data-testid="currency-card" style={{ width: 300 }}>
            <CurrencyConverter {...props} />
        </Card>
    </Col>
}


export default CurrencyCard;