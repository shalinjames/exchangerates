import React from 'react';
import { Card } from 'antd';

interface CardProps {
    title: string,
    desc: string
}

const card = ({ title, desc }: CardProps) => <Card title={title} bordered={false}> {desc} </Card>

export default card;