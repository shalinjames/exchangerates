import React from 'react';
import { Col, Card } from 'antd';
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter"

interface CurrencyCardProps {
    from: string,
    to: string
}

const CurrencyCard = ({ from, to }: CurrencyCardProps) => {
    return <Col span={5}>
        <Card data-testid="currency-card" style={{ width: 300 }}>
            <CurrencyConverter from={from} to={to} />
        </Card>
    </Col>
}


export default CurrencyCard;