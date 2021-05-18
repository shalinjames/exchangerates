import React from 'react';
import { Card } from 'antd';

interface CurrencyCardProps {
    title: string,
    children: any
}

const CurrencyCard = ({ title, children }: CurrencyCardProps) => <Card data-testid="currency-card" style={{ width: 300 }} title={title}> {children} </Card>

export default CurrencyCard;