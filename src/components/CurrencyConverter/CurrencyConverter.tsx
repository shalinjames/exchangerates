import { Typography } from 'antd';
import React, { useEffect, useState } from "react";
import { getLatestExchangeRate } from "../../webservices/frankfurter";
import currenciesResponseJson from "../../test/currencies.response.json"


const CurrencyConverter = ({ from, to }: Record<string, string>) => {
    const [conversion, setConversion] = useState(0);
    const { Text, Title } = Typography;
    const { [from]: displayValueFrom, [to]: displayValueTo } = currenciesResponseJson as Record<string, string>
    useEffect(() => {
        getLatestExchangeRate({
            amount: 1, from, to
        })
            .then(currency => setConversion(currency))
            .catch(ex => console.log(ex));
    }, [from, to]);

    return <div title="currency-converter">
        <Text type="secondary"> 1 <span title="currency-from">{displayValueFrom}</span> Equals </Text>
        <Title level={3}><span title="conversion-rate">{conversion}</span> <span title="currency-to">{displayValueTo}</span></Title>
    </div>
}

export default CurrencyConverter;