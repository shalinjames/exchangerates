import { Typography } from 'antd';
import React, { useEffect, useState } from "react";
import { getLatestExchangeRate } from "../../webservices/frankfurter";


const CurrencyConverter = ({ from, to }: Record<string, string>) => {
    const [conversion, setConversion] = useState(0);
    const { Text, Title } = Typography;
    useEffect(() => {
        getLatestExchangeRate({
            amount: 1, from, to
        })
            .then(currency => setConversion(currency))
            .catch(ex => console.log(ex));
    }, [from, to]);

    return <div title="currency-converter">
        <Text type="secondary"> 1 <span title="currency-from">{from}</span> Equals </Text>
        <Title level={3}><span title="conversion-rate">{conversion}</span> <span title="currency-to">{to}</span></Title>
    </div>
}

export default CurrencyConverter;